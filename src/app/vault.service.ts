import { Injectable, NgZone } from "@angular/core";
import {
  Vault,
  Device,
  DeviceSecurityType,
  VaultType,
  IdentityVaultConfig,
} from "@ionic-enterprise/identity-vault";
import { Platform } from "@ionic/angular";


const config: IdentityVaultConfig = {
  key: "io.ionic.gettingstartedivangular",
  type: VaultType.DeviceSecurity,
  deviceSecurityType: DeviceSecurityType.Both,
  lockAfterBackgrounded: 2000,
  shouldClearVaultAfterTooManyFailedAttempts: true,
  customPasscodeInvalidUnlockAttempts: 2,
  unlockVaultOnLoad: false
};
const userNameKey = "username";
const userPasswordKey = "password";

export interface VaultServiceState {
  username: string;
  password: string;
  isLocked: boolean;
  privacyScreen: boolean;
  lockType: "NoLocking" | "Biometrics" | "SystemPasscode" | "Both";
  canUseBiometrics: boolean;
  canUsePasscode: boolean;
  vaultIsEmpty: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class VaultService {
  public state: VaultServiceState = {
    username: "",
    password: "",
    isLocked: false,
    privacyScreen: false,
    lockType: "Biometrics",
    canUseBiometrics: false,
    canUsePasscode: false,
    vaultIsEmpty: true,
  };

  vault: Vault;

  constructor(private ngZone: NgZone, private platform: Platform) {
    this.init();
  }

  async init() {
    await this.platform.ready(); // This is required only for Cordova
    this.vault = new Vault(config);

    this.state.lockType = 'Both';
    await this.setLockType();

    this.vault.onLock(() => {
      this.ngZone.run(() => {
        this.state.isLocked = true;
        this.state.username = undefined;
        this.state.password = undefined;
      });
    });

    this.vault.onUnlock(() => {
      this.ngZone.run(() => {
        this.state.isLocked = false;
      });
    });

    this.state.isLocked = await this.vault.isLocked();
    this.state.privacyScreen =  await Device.isHideScreenOnBackgroundEnabled();
    this.state.canUseBiometrics = await Device.isBiometricsEnabled();
    this.state.canUsePasscode = await Device.isSystemPasscodeSet();
    this.state.vaultIsEmpty = await this.vault.isEmpty();
  }

  async setSession(username: string, password: string): Promise<void> {
    this.state.username = username;
    this.state.password = password;
    await this.vault.setValue(userNameKey, username);
    await this.vault.setValue(userPasswordKey, password);
    this.state.vaultIsEmpty = await this.vault.isEmpty();
  }

  async restoreSession() {
    const username = await this.vault.getValue(userNameKey);
    const password = await this.vault.getValue(userPasswordKey);
    this.state.username = username;
    this.state.password = password;
    return this.state;
  }
  async checkBiometricAvalability() {
    const isBiometricSupport = await Device.isBiometricsSupported();
    const isBiometricEnabled = await Device.isBiometricsEnabled();
    if (isBiometricSupport && isBiometricEnabled) {
      return true;
    } else {
      return false;
    }
  }

  async lockVault() {
    await this.vault.lock();
  }

  async unlockVault() {
    await this.vault.unlock();
  }

  setPrivacyScreen(enabled: boolean) {
    Device.setHideScreenOnBackground(enabled);
    this.state.privacyScreen = enabled;
  }


  async setLockType() {
    let type: VaultType;
    let deviceSecurityType: DeviceSecurityType;

    switch (this.state.lockType) {
      case "Biometrics":
        type = VaultType.DeviceSecurity;
        deviceSecurityType = DeviceSecurityType.Biometrics;
        break;

      case "SystemPasscode":
        type = VaultType.DeviceSecurity;
        deviceSecurityType = DeviceSecurityType.SystemPasscode;
        break;

        case "Both":
        type = VaultType.DeviceSecurity;
        deviceSecurityType = DeviceSecurityType.Both;
        break;

      default:
        type = VaultType.SecureStorage;
        deviceSecurityType = DeviceSecurityType.None;
    }
    await this.vault.updateConfig({ ...this.vault.config, type, deviceSecurityType });
  }

  async clearVault() {
    await this.vault.clear();
    this.state.lockType = "NoLocking";
    this.state.username = undefined;
    this.state.password = undefined;
    this.state.vaultIsEmpty = await this.vault.isEmpty();
  }

  async doesVaultExistInApp() {
    this.state.vaultIsEmpty = await this.vault.isEmpty();
  }
}


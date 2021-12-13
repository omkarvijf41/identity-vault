import { Injectable, NgZone } from "@angular/core";
import { Capacitor } from "@capacitor/core";
import {
  Vault,
  Device,
  DeviceSecurityType,
  VaultType,
  BrowserVault,
  IdentityVaultConfig,
} from "@ionic-enterprise/identity-vault";
import { Platform } from "@ionic/angular";

const config: IdentityVaultConfig = {
  key: "io.ionic.getstartedivangular",
  type: VaultType.DeviceSecurity,
  deviceSecurityType: DeviceSecurityType.Both,
  lockAfterBackgrounded: 2000,
  shouldClearVaultAfterTooManyFailedAttempts: true,
  customPasscodeInvalidUnlockAttempts: 2,
  unlockVaultOnLoad: false,
  iosBiometricsLocalizedFallbackTitle:"Use Password"
};
const usernameKey = "username";
const PasswordKey = "password"

export interface VaultServiceState {
  username: string;
  password: string;
  isLocked: boolean;
  privacyScreen: boolean;
  lockType: "NoLocking" | "Biometrics" | "SystemPasscode" | "Both";
  canUseBiometrics: boolean;
  canUseBoth: boolean;
  canUsePasscode: boolean;
  vaultExists: boolean;
}

@Injectable({ providedIn: "root" })
export class VaultService {
  public state: VaultServiceState = {
    username: "",
    password: "",  
    isLocked: false,
    privacyScreen: true,
    lockType: "Both",
    canUseBiometrics: false,
    canUseBoth: false,
    canUsePasscode: false,
    vaultExists: false,
  };

  vault: Vault | BrowserVault;

  constructor(private ngZone: NgZone, private platform: Platform) {
    this.vault = new Vault(config);
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
    this.init();
  }

  async init() {
    
    this.state.isLocked = await this.vault.isLocked();
    this.state.privacyScreen =
      Capacitor.getPlatform() === "web"
        ? false
        : await Device.isHideScreenOnBackgroundEnabled();
    this.state.canUseBiometrics =
      Capacitor.getPlatform() === "web"
        ? false
        : await Device.isBiometricsEnabled();
        this.state.canUseBoth =
      Capacitor.getPlatform() === "web"
        ? false
        : await Device.isBiometricsEnabled() && await Device.isSystemPasscodeSet();
    this.state.canUsePasscode =
      Capacitor.getPlatform() === "web"
        ? false
        : await Device.isSystemPasscodeSet();
    this.state.vaultExists = await this.vault.doesVaultExist();
  }

  async setSession(username: string, password:string): Promise<void> {
    this.state.username = username;
    this.state.password = password;
    await this.vault.setValue(usernameKey, username);
    await this.vault.setValue(PasswordKey, password);
    this.state.lockType = "Both";
    await this.setLockType();
    await this.vault.lock();
    this.state.vaultExists = await this.vault.doesVaultExist();
  }

  async restoreSession() {
    const username = await this.vault.getValue(usernameKey);
    const password = await this.vault.getValue(usernameKey);
    this.state.vaultExists = await this.vault.doesVaultExist();
    return {
      username,
      password
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

        default:
        type = VaultType.DeviceSecurity;
        deviceSecurityType = DeviceSecurityType.Both;
        break;
    }
    await this.vault.updateConfig({ ...this.vault.config, type, deviceSecurityType });
  }

  async clearVault() {
    await this.vault.clear();
    this.state.lockType = "NoLocking";
    this.state.username = undefined;
    this.state.password = undefined;
    this.state.vaultExists = await this.vault.isEmpty();
  }
}

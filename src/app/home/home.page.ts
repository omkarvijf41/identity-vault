import { Component } from "@angular/core";
import { VaultService, VaultServiceState } from "../vault.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  public state: VaultServiceState;
  biometric:boolean = true;
  constructor(private vaultService: VaultService) {
    this.state = vaultService.state;
  }

  async setSession() {
    if(this.biometric){
      await this.vaultService.setSession(this.state.username,this.state.password);
    }
    console.log('setSession username:'+this.state.username, 'setSession password:'+this.state.username)
  }

  async restoreSession() {
    const res = await this.vaultService.restoreSession();
    this.state.username = res.username;
    this.state.password = res.password;
    console.log('restoreSession username:'+this.state.username, 'restoreSession password:'+this.state.username)
  }

  async refresh(){
    await this.restoreSession();
  }

  async lockVault() {
    await this.vaultService.lockVault();
  }

  async unlockVault() {
    await this.vaultService.unlockVault();
  }

  async setLockType() {
    await this.vaultService.setLockType();
  }

  async setPrivacyScreen() {
    await this.vaultService.setPrivacyScreen(this.state.privacyScreen);
  }

  async clearVault() {
    await this.vaultService.clearVault();
  }
}

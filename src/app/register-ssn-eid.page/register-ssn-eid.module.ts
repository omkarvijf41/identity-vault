import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {IonicModule} from '@ionic/angular';
import {RegisterSsnEidPageRoutingModule} from './register-ssn-eid-routing.module';
import {RegisterSsnEid} from './register-ssn-eid.page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterSsnEidPageRoutingModule
  ],
  declarations: [RegisterSsnEid],
  providers: [InAppBrowser]
})
export class RegisterSsnEidPageModule {}

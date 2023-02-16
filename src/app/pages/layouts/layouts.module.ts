import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {SideBarComponent} from "./side-bar/side-bar.component";
import {SharedModule} from "../../common/shared/shared.module";
import {AuthentificationService} from "./authentification.service";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SideBarRightComponent} from "./side-bar-right/side-bar-right.component";
import {RegistreComponent} from "./registre/registre/registre.component";


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    SideBarComponent,
    SideBarRightComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule
  ],
  providers: [AuthentificationService]
})
export class LayoutsModule { }

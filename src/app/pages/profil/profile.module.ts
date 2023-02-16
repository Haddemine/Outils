import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../common/shared/shared.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {ProfileComponent} from "./profil/profile.component";
import {ProfileRoutingModule} from "./profile-routing.module";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    MatButtonToggleModule,
    MatMenuModule
  ]
})
export class ProfileModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../common/shared/shared.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {AjoutComponent} from "./ajout_maison/ajout.component";
import {AjoutRoutingModule} from "./ajout-routing.module";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";



@NgModule({
  declarations: [
    AjoutComponent
  ],
  imports: [
    CommonModule,
    AjoutRoutingModule,
    SharedModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ]
})
export class AjoutModule { }

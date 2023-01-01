import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AproposRoutingModule } from './apropos-routing.module';
import { AproposComponent } from './apropos/apropos.component';
import {SharedModule} from "../../common/shared/shared.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    AproposComponent
  ],
  imports: [
    CommonModule,
    AproposRoutingModule,
    SharedModule,
    MatButtonToggleModule,
    MatMenuModule
  ]
})
export class AproposModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Contactez_nousRoutingModule } from './contactez_nous-routing.module';
import {SharedModule} from "../../common/shared/shared.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {Contactez_nousComponent} from "./contactez_nous/contactez_nous.component";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    Contactez_nousComponent
  ],
    imports: [
        CommonModule,
        Contactez_nousRoutingModule,
        SharedModule,
        MatButtonToggleModule,
        MatMenuModule,
        MatTableModule
    ]
})
export class Contactez_nousModule { }

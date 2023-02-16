import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../common/shared/shared.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {FavorisComponent} from "./favoris/favoris.component";
import {FavorisRoutingModule} from "./favoris-routing.module";


@NgModule({
  declarations: [
    FavorisComponent
  ],
  imports: [
    CommonModule,
    FavorisRoutingModule,
    SharedModule,
    MatButtonToggleModule,
    MatMenuModule
  ]
})
export class FavorisModule { }

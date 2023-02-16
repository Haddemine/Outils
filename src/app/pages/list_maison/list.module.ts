import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../common/shared/shared.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {ListComponent} from "./list/list.component";
import {ListRoutingModule} from "./list-routing.module";


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
    MatButtonToggleModule,
    MatMenuModule
  ]
})
export class ListModule { }

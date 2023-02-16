import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../common/shared/shared.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {StatisticComponent} from "./statistic/statistic.component";
import {StatisticRoutingModule} from "./statistic-routing.module";


@NgModule({
  declarations: [
    StatisticComponent
  ],
  imports: [
    CommonModule,
    StatisticRoutingModule,
    SharedModule,
    MatButtonToggleModule,
    MatMenuModule
  ]
})
export class StatisticModule { }

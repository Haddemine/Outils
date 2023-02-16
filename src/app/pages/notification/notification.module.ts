import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../common/shared/shared.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {NotificationComponent} from "./notification/notification.component";
import {NotificationRoutingModule} from "./notification-routing.module";


@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    SharedModule,
    MatButtonToggleModule,
    MatMenuModule
  ]
})
export class NotificationModule { }

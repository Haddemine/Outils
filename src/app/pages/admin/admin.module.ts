import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    UsersComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        AppModule
    ]
})
export class AdminModule { }

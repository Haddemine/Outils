import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Contactez_nousComponent} from "./contactez_nous/contactez_nous.component";

const routes: Routes = [
  {
    path : "",
    component: Contactez_nousComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Contactez_nousRoutingModule { }

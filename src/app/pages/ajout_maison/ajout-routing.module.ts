import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjoutComponent} from "./ajout_maison/ajout.component";

const routes: Routes = [
  {
    path : "",
    component: AjoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutRoutingModule { }

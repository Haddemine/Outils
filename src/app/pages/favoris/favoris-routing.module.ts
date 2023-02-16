import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FavorisComponent} from "./favoris/favoris.component";

const routes: Routes = [
  {
    path : "",
    component: FavorisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavorisRoutingModule { }

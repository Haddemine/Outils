import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategorieListComponent} from "./categories-list/categorie-list.component";

const routes: Routes = [
  {
    path : "",
    component: CategorieListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }

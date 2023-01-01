import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AppGuard} from "../../services/app.guard";
import {CatagoriesModule} from "../categories/categorie.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AppGuard],
    children: [
      {
        path: 'apropos',
        loadChildren: () =>
          import('../apropos/apropos.module').then(
            (m) => m.AproposModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../admin/admin.module').then(
            (m) => m.AdminModule
          ),
      },
      {
        path: 'produits',
        loadChildren: () =>
          import('../produits/produits.module').then(
            (m) => m.ProduitsModule
          ),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../categories/categorie.module').then(
            (m) => m.CatagoriesModule
          ),
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }

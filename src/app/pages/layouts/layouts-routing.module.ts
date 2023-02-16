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
      {
        path: 'contactez',
        loadChildren: () =>
          import('../contactez_nous/contactez_nous.module').then(
            (m) => m.Contactez_nousModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profil/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'favoris',
        loadChildren: () =>
          import('../favoris/favoris.module').then(
            (m) => m.FavorisModule
          ),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('../list_maison/list.module').then(
            (m) => m.ListModule
          ),
      },
      {
        path: 'statistique',
        loadChildren: () =>
          import('../statistic/statistic.module').then(
            (m) => m.StatisticModule
          ),
      },
      {
        path: 'ajout',
        loadChildren: () =>
          import('../ajout_maison/ajout.module').then(
            (m) => m.AjoutModule
          ),
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('../notification/notification.module').then(
            (m) => m.NotificationModule
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

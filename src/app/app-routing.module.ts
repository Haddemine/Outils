import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {AppGuard} from "./services/app.guard";
import {RegistreComponent} from "./pages/layouts/registre/registre/registre.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/layouts/layouts.module').then(
        (m) => m.LayoutsModule
      ),
  },
  {path: 'registre', component: RegistreComponent},
  {path: '**', redirectTo: '404'},
  {path: '404', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {CategorieListComponent} from "./categories-list/categorie-list.component";
import {CategorieService} from "./categorie.service";
import {CategorieRoutingModule} from "./categorie-routing.module";
import {SharedModule} from "../../common/shared/shared.module";


@NgModule({
  declarations: [
    CategorieListComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    SharedModule
  ],
  providers: [CategorieService]
})
export class CatagoriesModule { }

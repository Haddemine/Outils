import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../categorie.service";

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {
  categories: any;

  constructor(private categorietService: CategorieService) { }

  ngOnInit(): void {
    this.categorietService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

}

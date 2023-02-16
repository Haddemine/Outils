import {Component, HostListener} from '@angular/core';
import {LocalDbService} from "./services/local-db.service";
import {MatDialog} from "@angular/material/dialog";
import {ListComponent} from "./pages/list_maison/list/list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alocation de maison';


  constructor(private localDbService: LocalDbService) {
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnload($event: any) {
    sessionStorage.setItem('token', JSON.stringify(this.localDbService.token));
  }



}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UtilService} from "../../services/util.service";


@Injectable()
export class CategorieService {

  constructor(private httpClient: HttpClient,
              private utilService: UtilService,
  ) {
  }

  getCategories() {

    return this.httpClient.get("http://sup-er-app.herokuapp.com/apis/categorie/", {
      headers: this.utilService.getHeadersWithToken()
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit{
  frmLogin: FormGroup = <FormGroup>{};
  showError = false;

  ngOnInit(): void {

  }

  loginIn() {

  }

}


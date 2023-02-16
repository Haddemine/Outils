import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  frmLogin: FormGroup = <FormGroup>{};

  isChecked = true;
  formGroup: FormGroup;

  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue],
    });
  }

  onFormSubmit() {
    alert(JSON.stringify(this.formGroup.value, null, 2));
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {UtilService} from "../../../services/util.service";

@Component({
  selector: 'app-side-bar-right',
  templateUrl: './side-bar-right.component.html',
  styleUrls: ['./side-bar-right.component.css']
})
export class SideBarRightComponent implements OnInit {

  constructor(public util: UtilService) { }

  ngOnInit(): void {
  }

}

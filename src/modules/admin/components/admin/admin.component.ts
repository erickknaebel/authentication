import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input() users;

  constructor() { }

  ngOnInit() {
  }

}

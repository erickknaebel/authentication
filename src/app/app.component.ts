import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  constructor(private _ps: NgxPermissionsService, private _http: HttpClient) {}

  ngOnInit(): void {
    const permissions: string[] = ["ADMIN", "USER"];

    this._ps.loadPermissions(permissions);
  }
}

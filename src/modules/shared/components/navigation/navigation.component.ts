import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private _as: AuthService) { }

  @Input() authenticated$: Observable<boolean>;
  @Input() user$: Observable<string>;

  logout() {
    this._as.logout();
  }

}

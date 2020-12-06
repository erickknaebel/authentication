import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import { NgxPermissionsService } from 'ngx-permissions';

export const Services = [
    AuthService,
    CookieService,
    NgxPermissionsService
]
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {UserService} from "../services/auth/user.service";
import {User} from "../app.model";

@Injectable()
export class HttpBasicInterceptor implements HttpInterceptor {
  constructor(private userService: UserService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!this.userService.isLogin())
      return;

    const user: User = this.userService.get();
    if (user) {
      const token = btoa(`${user.primaryEmailAddr.address}:${user.employeeNumber}`);
      request = request.clone({ headers: request.headers.set('Authorization', 'Basic ' + token) });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => event),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason: error && error.error.reason ? error.error.reason : '',
          status: error.status
        };
        return throwError(error);
      }));
  }
}

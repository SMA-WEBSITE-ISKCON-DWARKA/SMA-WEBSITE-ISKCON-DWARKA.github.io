import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AdminLogin} from '../../models/admin.interface';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  login(adminCreds: AdminLogin): Observable<any> {
    return this.httpClient.post<Observable<any>>(`${environment.backendUl}/admin/login`, adminCreds);

  }
}

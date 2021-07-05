import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {RegisterUser, UserCreatedResponse} from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) {
  }

  checkUser(phoneNumber: string): Observable<any> {
    return this.httpClient.get<Observable<any>>(`${environment.backendUl}/users/checkUser/${phoneNumber}`);
  }

  registerUser(regUserRequest: RegisterUser): Observable<UserCreatedResponse> {
    return this.httpClient.post<UserCreatedResponse>(`${environment.backendUl}/register`, regUserRequest);
  }

  getUserUsingFirebaseId(firebaseId: string): Observable<UserCreatedResponse> {
    return this.httpClient.get<UserCreatedResponse>(`${environment.backendUl}/users/firebaseId/${firebaseId}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from './Models/Models';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  apiUrl: string = 'https://freeapi.gerasim.in/api/BigBasket/';

  constructor(private http: HttpClient) { }

  CheckLogin (obj: any): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(`${this.apiUrl}login`, obj);
  } 

  CheckSignUp (obj: any): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(`${this.apiUrl}signUp`, obj);
  } 
}


// Write you code here




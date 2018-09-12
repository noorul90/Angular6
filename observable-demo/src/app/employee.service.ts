import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json"

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]>{
    /** In realworld application we don't hardcode the date, We will get below data 
     * from databaseserver/webserver/webservices */
    return this.http.get<IEmployee[]>(this._url);
  }
}

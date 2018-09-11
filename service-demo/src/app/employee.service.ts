import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(){
    /** In realworld application we don't hardcode the date, We will get below data 
     * from databaseserver/webserver/webservices */
    return [
      {"id": 1, "name": "noorul1", "age": 27},
      {"id": 2, "name": "noorul2", "age": 28},
      {"id": 3, "name": "noorul3", "age": 26},
      {"id": 4, "name": "noorul4", "age": 29},
      {"id": 5, "name": "noorul5", "age": 25}
    ];
  }
}

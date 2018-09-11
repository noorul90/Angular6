import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee Details</h2>
  <ul *ngFor="let employee of employees">
   <li>{{employee.id}}. {{employee.name}} -  {{employee.age}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  /** Violating DRY and Single responsibility principal to duplicate the code */
  /** to overcome this problem use service class in angular */
  /*public employees = [
    {"id": 1, "name": "noorul1", "age": 27},
    {"id": 2, "name": "noorul2", "age": 28},
    {"id": 3, "name": "noorul3", "age": 26},
    {"id": 4, "name": "noorul4", "age": 29},
    {"id": 5, "name": "noorul5", "age": 25}
  ]*/

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }

}

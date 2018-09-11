import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List!</h2>
    <ul *ngFor="let employee of employees">
     <li>{{employee.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  /** Violating DRY and Single responsibility principal to duplicate the code */
  /** to overcome this problem use service class in angular */
  /*public employees = [
    {"id": 1, "name": "noorul1", "age": 27},
    {"id": 2, "name": "noorul2", "age": 28},
    {"id": 3, "name": "noorul3", "age": 26},
    {"id": 4, "name": "noorul4", "age": 29},
    {"id": 5, "name": "noorul5", "age": 25}
  ] */

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }

}

import { Employee } from '../model/Employee';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  Employees: Employee[]
  newEmployee: Employee
  updatedEmployee: Employee
  Test: Observable<Employee[]>



  constructor(public http: HttpClient) {
    this.Employees = []
  }
  // getEmployees() {
  //   return this.http.get<Employee[]>('http://localhost:8856/all')
  // }
  getEmployeeBYID(employeeID: number) {
    //console.log(employeeID)
    this.Test= this.http.get<Employee[]>('http://localhost:8856/'+employeeID)
    if(this.Test!=null)
    {return this.http.get<Employee[]>('http://localhost:8856/'+employeeID)}
  }

}
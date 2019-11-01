import { EmployeeService } from './employee.service';
import { Component } from '@angular/core';
import { Employee } from 'src/model/Employee';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    updateNumber: number
    employeeID: number
    flag: number

    constructor(public EmployeeService: EmployeeService) {
        EmployeeService.newEmployee = new Employee()
        EmployeeService.updatedEmployee = new Employee()
        
        
        //EmployeeService.getEmployeeBYID(this.employeeID)
        //.subscribe(data => this.EmployeeService.Employees = data)
        
    }
     ABC() {
         if(this.employeeID!=null){
            console.log(this.employeeID)
            this.EmployeeService.getEmployeeBYID(this.employeeID).subscribe(data => this.EmployeeService.Employees = data)
            this.flag=1
        }
        else{
        console.log("Cannot be empty")
        }
    //this.employeeID=null;
    }
        


}
import { Component, OnInit, Injectable } from '@angular/core';
import { Department } from '../entities/department';
import { Employee } from '../entities/employee';
import { EmployeeService } from '../services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  public employee: Employee;
  public departments: Department[];
  public defaultDate : string;
  public defaultDepartment : Department;
  public showResponse : boolean = false;
  public response : string = "";

  constructor(private employeeService: EmployeeService) {
    this.employee = new Employee();
    this.defaultDate = "1989-06-23";
  }

  ngOnInit() {
    this.employeeService.loadDepartments().subscribe(departmentsArray => {
      this.departments = <Department[]>departmentsArray;
      this.defaultDepartment = <Department>departmentsArray[0];
      this.employee.Department = this.defaultDepartment;
      console.log(departmentsArray);
    });
  }

  onSubmit() {
    console.log(this.employee);
    this.employeeService.saveEmployee(this.employee).subscribe(response => {
      if(response instanceof HttpErrorResponse) {
        
      } else {
        this.response = <string>response;
        this.showResponse = true;
        setTimeout(() => {
          this.showResponse = false;
        },2500);
      }
      console.log(response);
    });
  }

}

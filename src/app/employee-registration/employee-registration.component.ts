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
  public defaultDate : string = "1989-06-23";

  constructor(private employeeService: EmployeeService) {
    this.employee = new Employee;
  }

  ngOnInit() {
    this.employeeService.loadDepartments().subscribe(departmentsArray => {
      this.departments = <Department[]>departmentsArray;
      console.log(departmentsArray);
    });
  }

  onSubmit() {
    console.log(this.employee);
    this.employeeService.saveEmployee(this.employee).subscribe(response => {
      if(response instanceof HttpErrorResponse) {

      } else {

      }
      console.log(response);
    });
  }

}

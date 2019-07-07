import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../entities/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees: Employee[];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe( employeeArray => {
      this.employees = <Employee[]>employeeArray;
      console.log(employeeArray);
    });
  }

}

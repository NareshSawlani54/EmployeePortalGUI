import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { Department } from './entities/department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'employeePortal';
}

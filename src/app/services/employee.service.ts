import { Injectable } from '@angular/core';
import { Employee } from '../entities/employee';
import { HttpClient } from '@angular/common/http';
import { Department } from '../entities/department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {

  }


  public getAllEmployees(): Observable<Object> {
    return this.http.get('http://localhost:8080/employee/getAll');
  }

  public saveEmployee(employee: Employee): Observable<Object> {
    return this.http.post('http://localhost:8080/employee/save',employee,{responseType: 'text'});
  }

  public loadDepartments() : Observable<Object> {
    return this.http.get('http://localhost:8080/department/getAll');
  }


}

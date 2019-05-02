import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from './department.model';
import { Departments } from './department-mock';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  getDepartments(): Observable<Department[]> {
    return of(Departments);
  }
  
}

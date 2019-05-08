import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from './department.model';
import { Departments } from './department-mock';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  allDepartments = Departments;
  children: Department[] = [];

  getDepartments(): Observable<Department[]> {
    return of(Departments);
  }
  getDepartment(name: string): Observable<Department> {
    return of(Departments.find(department => department.name === name));
  }
  getChildren(id: number): Department[]{
   
    this.allDepartments.forEach(department => {
      if(department.parentId === id){
        this.children.push(department);
        console.log(department.name);
      }

    });
    return this.children;
  }
  getDep(name: string): Department {
    return this.allDepartments.find(department => department.name === name);
  }
  deleteDepartment(name: string){
    var index = this.allDepartments.indexOf(this.getDep(name));
    this.allDepartments.splice(index, 1);
  }
}

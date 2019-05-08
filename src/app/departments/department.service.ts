import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from './department.model';
import { Departments } from './department-mock';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }
  parentName: string;
  allDepartments = Departments;
  children: Department[] = [];

  getDepartments(): Observable<Department[]> {
    return of(Departments);
  }
  getDepartment(name: string): Observable<Department> {
    return of(Departments.find(department => department.name === name));
  }
  getDep(name: string): Department {
    return this.allDepartments.find(department => department.name === name);
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
  getManagingDepartment(parentId: number): String{
    this.parentName = '';
    this.allDepartments.forEach(department => {
      
      if(department.id === parentId){
        console.log('department.id', department.id);
        console.log(parentId)
        this.parentName =  department.name;
        console.log(this.parentName);
     

      }
    });
    if(this.parentName === ''){
      this.parentName = 'None';
    }
    return this.parentName;
  }
  
  deleteDepartment(name: string){
    var index = this.allDepartments.indexOf(this.getDep(name));
    this.allDepartments.splice(index, 1);
  }
}

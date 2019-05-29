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
  deptsUnder: Department[] = [];
  orgDepartments: Department [] = [];
  getDepartments(): Observable<Department[]> {
    return of(Departments);
  }
  getDepartment(name: string): Observable<Department> {
    return of(Departments.find(department => department.name === name));
  }
  getDep(name: string): Department {
    return this.allDepartments.find(department => department.name === name);
  }
  getDeptsByOrgId(orgID: string): Department[]{
    this.allDepartments.forEach(department =>{
      if(department.orgId === orgID){
        this.orgDepartments.push(department);
      }
    })
    return this.orgDepartments;
  }
  addDepartment(newDepartment: Department){
    this.allDepartments.push(newDepartment);
    
  }
  getDepById(Id: number) : Department{
    return this.allDepartments.find(department => department.id === Id);
  }
  editDepartment(id:number, newDepartment:Department){
    console.log("update deparetment");
    var index = this.allDepartments.indexOf(this.getDepById(id));
    this.allDepartments[index] = newDepartment;
    //this.departmentListChanged.next(this.departments.slice());
  }
  getChildren(id: number): Department[]{
   
    this.allDepartments.forEach(department => {
      if(department.parentId == id){
        this.children.push(department);
        console.log(department.name);
      }

    });
    return this.children;
  }
  getManagingDepartment(parentId: number): string{
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
  getDepartmentsUnder(deptId: number){
    this.deptsUnder = [];
    this.allDepartments.forEach(department => {
      
      if(department.parentId === deptId){
        
        this.deptsUnder.push(department);
      }
    });
    return this.deptsUnder;
  }

  deleteDepartment(Id: number){
    var index = this.allDepartments.indexOf(this.getDepById(Id));
    this.allDepartments.splice(index, 1);
    console.log(this.allDepartments);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../department.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentService } from '../department.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  name:string;
  
  department: Department;
  parentName: String;
  deptsUnder: Department[];

  constructor(private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private router: Router,
    private location: Location,
    private nzMessageService: NzMessageService
    ) { }
  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.name = params['name'];
        this.department = this.departmentService.getDep(this.name);
        this.parentName = this.departmentService.getManagingDepartment(this.department.parentId);
        this.getDepartmentsUnder(this.department.id);
      });
    
   
    console.log(this.deptsUnder)
}

// getDepartment(): void {
//   const name = this.route.snapshot.paramMap.get('name');
//   this.name = name;
//   this.departmentService.getDepartment(name).subscribe(department => this.department = department);
//   this.department = this.departmentService.getDep(name);
// }

getManagingDept(parentId: number){

  this.parentName = this.departmentService.getManagingDepartment(parentId);
  return this.parentName;
}
getDepartmentsUnder(deptId: number){
  this.deptsUnder = this.departmentService.getDepartmentsUnder(deptId);
}
goBack(): void {
  this.location.back();
}


  onDelete(): void{
    
    this.departmentService.deleteDepartment(this.name);
    this.nzMessageService.info('Organization Deleted Successfully. ');
    this.router.navigate(['departments', this.department.orgId]);
    
  }
  onCancel(): void {
    this.nzMessageService.info('Task canceled.');
  }
}

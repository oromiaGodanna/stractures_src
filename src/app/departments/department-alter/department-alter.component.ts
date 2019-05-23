import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../department.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Department } from '../department.model';
import { OrganizationService } from 'src/app/organizations/organization.service';
//import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-department-alter',
  templateUrl: './department-alter.component.html',
  styleUrls: ['./department-alter.component.css']
})
export class DepartmentAlterComponent implements OnInit {

  alterForm: FormGroup;
  id: string;
  department: Department;
  name: string;
  description:string;
  managingDept: string;
  deptsUnder: Department[];
  allDepartments: Department[];
  orgName: string;

  constructor(private route: ActivatedRoute,private departmentService: DepartmentService,
    private organizationService: OrganizationService,
                            private nzMessageService: NzMessageService,
                            private router: Router) { }

  ngOnInit() {
    this.getDepartment();
    this.getManagingDept(this.department.parentId);
    console.log(this.managingDept);
    this.name = this.department.name;
    this.description = this.department.description;
    
    this.alterForm = new FormGroup({
      name: new FormControl(this.name, Validators.required),
      description: new FormControl(this.description, Validators.required),
      managingDept: new FormControl(this.managingDept, Validators.required),
      deptsUnder : new FormControl('', Validators.required)
    });
    
  }
  getDepartment(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.department = this.departmentService.getDepById(parseInt(this.id));
    this.allDepartments = this.departmentService.getDeptsByOrgId(this.department.orgId);
    this.getOrg();
    console.log(this.allDepartments);
  }
  getOrg(){
    const org =  this.organizationService.getOrganization(this.department.orgId);
    this.orgName = org.name;
   }
  getManagingDept(parentId: number){

    this.managingDept = this.departmentService.getManagingDepartment(parentId);
    return this.managingDept;
  }
  getDepartmentsUnder(deptId: number){
    this.deptsUnder = this.departmentService.getDepartmentsUnder(deptId);
  }
  onSubmit(){
    var orgId = this.department.orgId;
    var name = this.alterForm.value['name'];
    var description = this.alterForm.value['description'];
    var managingDep = this.alterForm.value['managingDept'];
    console.log(managingDep);
    const dept = new Department(this.department.id, orgId, managingDep, name, description);
    console.log(dept)
    this.departmentService.editDepartment(this.department.id, dept);
    this.router.navigate(["/detail", this.id]);
    
  }
  onCancel() {
    
    this.router.navigate(["/detail", this.id]);
  }
  onClear() {
    this.alterForm.reset();
  }

}

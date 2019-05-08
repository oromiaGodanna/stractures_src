import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Department } from '../department.model';
import { NzMessageService } from 'ng-zorro-antd';
import { Organization } from 'src/app/organizations/organization.model';
//import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-department-new',
  templateUrl: './department-new.component.html',
  styleUrls: ['./department-new.component.css']
})
export class DepartmentNewComponent implements OnInit {

  newDepartmentForm: FormGroup;
  orgId: string;
  tableView = 'true';
  AllDepartments: Department[];
  orgDepts: Department[] = [];

  constructor(private route: ActivatedRoute,private departmentService: DepartmentService,
    private nzMessageService: NzMessageService,
      private router: Router,) { }

  ngOnInit() {
    this.getDepartments();

    this.newDepartmentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      managingDept: new FormControl('', Validators.required)
    });
    
  }

  getDepartments():any{
    this.orgId = this.route.snapshot.paramMap.get('orgId');
    this.departmentService.getDepartments().subscribe(AllDepartments => this.AllDepartments = AllDepartments);
    this.AllDepartments.forEach(department => {
      if(department.orgId === this.orgId){
        this.orgDepts.push(department);
      }
    });
    
  }
  onSubmit(){
    var id = Math.floor(Math.random() * 100) + 10;
    var name = this.newDepartmentForm.value['name'];
    var description = this.newDepartmentForm.value['description'];
    var managingDept = this.newDepartmentForm.value['managingDept'];
    console.log(name, description, managingDept);
 
    const dept  = new Department(id, this.orgId, managingDept, name, description);
    this.departmentService.addDepartment(dept);
    this.nzMessageService.info('Organization Added Successfully.');
    
    this.router.navigate(["/departments", this.orgId]);
   
  }
  onCancel() {
    
    this.router.navigate(["/departments", this.orgId]);
  }

}

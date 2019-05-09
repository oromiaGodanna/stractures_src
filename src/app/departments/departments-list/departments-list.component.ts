import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentService } from '../department.service';
import { Department } from '../department.model';
import { OrganizationService } from '../../organizations/organization.service';
import { map, filter } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {

  orgId: string;
  tableView = 'true';
  AllDepartments: Department[];
  orgDepts: Department[] = [];
  children: Department[];
  nodes = [];
  root: Department;
  selectedDeptId: number;
  orgName: string;
  constructor(private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private organizationService: OrganizationService,
    private location: Location,
    private router: Router,
    private nzMessageService: NzMessageService) { }

  ngOnInit() {
    this.getDepartments();
    this.getOrg();
    // this.getTreeStracture();
    //console.log(this.orgDepts);
    this.tableView = "true";
  }

  getDepartments(): any {
    this.orgId = this.route.snapshot.paramMap.get('orgId');
    console.log(this.orgId)
    this.departmentService.getDepartments().subscribe(AllDepartments => this.AllDepartments = AllDepartments);
    this.AllDepartments.forEach(department => {
      if (department.orgId === this.orgId) {
        //console.log(department)
        this.orgDepts.push(department);
      }
    });

  }
  getOrg() {
    const org = this.organizationService.getOrganization(this.orgId);
    this.orgName = org.name;
  }
  checkChild(departmentId: number) {
    this.children = this.departmentService.getChildren(departmentId);
    console.log(this.children);
    if (this.children != null) {
      this.getChildren();
    } else {
      return this.children
    }
  }


  getChildren() {
    this.children.forEach(child => {
      return [{
        title: child.name,
        key: child.id,
        expanded: true,
        children: this.checkChild(child.id),
        isLeaf: (this.children.length < 1) ? true : false
      }]
    })
  }
  getTreeStracture() {
    this.root = this.orgDepts.find(department => department.parentId === 0);

    this.nodes.push({
      title: this.root.name,
      key: this.root.id,
      expanded: true,
      children: this.checkChild(this.root.id),
      isLeaf: (this.children.length < 1) ? true : false

    });
    console.log(this.nodes);

  }
  getId(Id: number) {
    this.selectedDeptId = Id;
    console.log(this.selectedDeptId);
  }
  onDelete(): void {

    this.departmentService.deleteDepartment(this.selectedDeptId);
    this.nzMessageService.info('Department Deleted Successfully. ');
    this.router.navigate(["/departments", this.orgId]);
  }
  onCancel(): void {
    this.nzMessageService.info('Task canceled.');
  }


}

    // this.orgDepts.forEach(department => {
    //   departmentIds.push(department.id);  
    // });



import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentService } from '../department.service';
import { Department } from '../department.model';
import { OrganizationService } from '../../organizations/organization.service';
import { map, filter } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { NzMessageService, NzFormatEmitEvent } from 'ng-zorro-antd';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {

   orgId: string;
   tableView ;
   AllDepartments: Department[];
   orgDepts: Department[] = [];
   children : Department[] = [];
   nodes = [];
   root : Department;
   selectedDeptId:number;
   orgName: string;
   childrenDetails: any[] = [];
  constructor(private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private organizationService: OrganizationService,
    private location: Location,
    private router: Router,
    private nzMessageService: NzMessageService) { }

  ngOnInit() {
    this.getDepartments();
    this.tableView =  true;
    this.getOrg();
   this.getTreeStracture();
    //console.log(this.orgDepts);
    
  }

  getDepartments():any{
    this.orgId = this.route.snapshot.paramMap.get('orgId');
    console.log(this.orgId)
    this.departmentService.getDepartments().subscribe(AllDepartments => this.AllDepartments = AllDepartments);
    this.AllDepartments.forEach(department => {
      if(department.orgId === this.orgId){
        //console.log(department)
        this.orgDepts.push(department);
      }
    });
    
  }
  getOrg(){
   const org =  this.organizationService.getOrganization(this.orgId);
   this.orgName = org.name;
  }
  checkChild(departmentId: number){
    
    var children = [];
    var childDepts = [];
    this.orgDepts.forEach(dept => {
      
    if(dept.parentId == departmentId ){
        childDepts.push(dept);
      }
    });
    if(childDepts != null){
      childDepts.forEach(dept => {
        children.push({
            title: dept.name,
            key: dept.id,
            expanded: true,
            children: this.checkChild(dept.id),
            isLeaf: (this.checkChild(dept.id).length < 1) ? true : false
          });

        });
      }
    return children;

  }

  getTreeStracture(){
    var CEO = this.orgDepts.find(department => department.name == 'CEO');
    this.root = this.orgDepts.find(department => department.parentId === CEO.parentId);
    
    this.nodes.push({
      title: this.root.name,
      key: this.root.id,
      expanded: true,
      children: this.checkChild(this.root.id),
      isLeaf: (this.checkChild(this.root.id)  == null) ? true : false

      });
      console.log(this.nodes);

  }
      getId(Id:number){
        this.selectedDeptId = Id;
        console.log(this.selectedDeptId);
      }
      onDelete(): void{
        
        this.departmentService.deleteDepartment(this.selectedDeptId);
        this.nzMessageService.info('Department Deleted Successfully. ');
        this.router.navigate(["/departments", this.orgId]);
      }
      onCancel(): void {
        this.nzMessageService.info('Task canceled.');
      }
      nzClick(event: NzFormatEmitEvent): void {
        var dept;
        var node_key = event.node.key;
        this.orgDepts.forEach(element => {
          if(element.id == parseInt(node_key)){
            this.router.navigate(["/detail", element.id]);

          }
        });
        
      }
  
    }
    

    // this.orgDepts.forEach(department => {
    //   departmentIds.push(department.id);  
    // });
 


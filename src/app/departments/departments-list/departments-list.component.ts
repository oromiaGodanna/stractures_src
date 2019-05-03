import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentService } from '../department.service';
import { Department } from '../department.model';
import { map, filter } from 'rxjs/operators'
import { Observable } from 'rxjs';

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

  constructor(private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private location: Location) { }

  ngOnInit() {
    this.getDepartments();
    console.log(this.orgDepts);
    this.tableView =  "true";
  }

  getDepartments():any{
    this.orgId = this.route.snapshot.paramMap.get('orgId');
    this.departmentService.getDepartments().subscribe(AllDepartments => this.AllDepartments = AllDepartments);
    this.AllDepartments.forEach(department => {
      if(department.orgId === this.orgId){
        console.log(department)
        this.orgDepts.push(department);
      }
    });
    
  }
}

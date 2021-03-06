import { Component, OnInit } from '@angular/core';
import { Organization } from './organization.model';
import { OrganizationService } from './organization.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  organization_list : Organization[];
  selectedOrgId : string;
  
  constructor(private organizationService: OrganizationService, 
    private router: Router,
    private nzMessageService: NzMessageService) { }

  ngOnInit() {
    this.getOrganizations();
  }

  getOrganizations(): void{
    this.organizationService.getOrganizations().subscribe(organization_list => this.organization_list = organization_list)
    console.log(this.organization_list);
  }
  getId(orgId: string): void{
    // console.log(orgId);
    this.selectedOrgId = orgId;
  }
  onDelete(): void{
    
    this.organizationService.deleteOrganization(this.selectedOrgId);
    this.nzMessageService.info('Organization Deleted Successfully. ');
    console.log(this.organization_list);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    //this.router.navigate(["/organizations"]);
  }
  onCancel(): void {
    this.nzMessageService.info('Task canceled.');
  }

  
   
  
}

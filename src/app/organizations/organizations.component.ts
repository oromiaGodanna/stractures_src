import { Component, OnInit } from '@angular/core';
import { Organization } from './organization.model';
import { OrganizationService } from './organization.service';
@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  organization_list : Organization[];
  
  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
    this.getOrganizations();
  }

  getOrganizations(): void{
    this.organizationService.getOrganizations().subscribe(organization_list => this.organization_list = organization_list)
  }
}

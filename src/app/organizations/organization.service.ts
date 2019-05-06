import { Injectable } from '@angular/core';
import { Organization } from './organization.model';
import { Organizations } from './organization-mock';
import { Observable, of } from 'rxjs';
import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  AllOrganizations = Organizations;
  

  getOrganizations(): Observable<Organization[]>{
    return of(Organizations);
  }
  getOrganization(orgId: string): Organization{ 
    return this.AllOrganizations.find(organization => organization.orgId == orgId);
    
  }
  deleteOrganization(id: string){
    var index = this.AllOrganizations.indexOf(this.getOrganization(id));
    this.AllOrganizations.splice(index, 1);
    //this.departmentService.deleteAllOrganizationDepartments(id);
    //this.organizationListChanged.next(this.orgnizations.slice());
  }
  constructor() { }
}

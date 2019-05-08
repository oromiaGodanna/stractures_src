import { Injectable } from '@angular/core';
import { Organization } from './organization.model';
import { Organizations } from './organization-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  updateOrganization(id: number, newOrganization: Organization): any {
    throw new Error("Method not implemented.");
  }
  AllOrganizations = Organizations;
  

  getOrganizations(): Observable<Organization[]>{
    return of(Organizations);
  }
  getOrganization(orgId: string): Organization{ 
    return this.AllOrganizations.find(organization => organization.orgId == orgId);
    
  }
  addOrganization(newOrganization: Organization){
    this.AllOrganizations.push(newOrganization);
    
  }
  deleteOrganization(id: string){
    var index = this.AllOrganizations.indexOf(this.getOrganization(id));
    this.AllOrganizations.splice(index, 1);

  }
  constructor() { }
}

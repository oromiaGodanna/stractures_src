import { Injectable } from '@angular/core';
import { Organization } from './organization.model';
import { Organizations } from './organization-mock';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  getOrganizations(): Observable<Organization[]>{
    return of(Organizations);
  }
  constructor() { }
}

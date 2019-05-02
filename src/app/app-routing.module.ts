import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationsComponent } from './organizations/organizations.component'
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';
import { DepartmentDetailComponent } from './departments/department-detail/department-detail.component';
import { DepartmentNewComponent } from './departments/department-new/department-new.component';
import { DepartmentAlterComponent } from './departments/department-alter/department-alter.component';
import { OrganizationNewComponent } from './organizations/organization-new/organization-new.component';

const routes: Routes = [
  {path: '', redirectTo: 'organizations', pathMatch: 'full'},
  {path: 'organizations', component:OrganizationsComponent},
  {path: 'newOrganization', component: OrganizationNewComponent},
  { path: 'departments/:orgId', component: DepartmentsListComponent},
  { path: 'detail/:name', component: DepartmentDetailComponent },
  { path: 'newDepartment', component : DepartmentNewComponent},
  { path: 'edit/:name', component : DepartmentAlterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

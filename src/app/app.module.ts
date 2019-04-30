import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DepartmentsComponent } from './departments/departments.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';
import { DepartmentDetailComponent } from './departments/department-detail/department-detail.component';
import { DepartmentNewComponent } from './departments/department-new/department-new.component';
import { DepartmentAlterComponent } from './departments/department-alter/department-alter.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    OrganizationsComponent,
    DepartmentsListComponent,
    DepartmentDetailComponent,
    DepartmentNewComponent,
    DepartmentAlterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {NgForm, FormArray, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Organizations } from '../organization-mock';
import { OrganizationService} from '../organization.service';
import { Organization } from '../organization.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-organization-new',
  templateUrl: './organization-new.component.html',
  styleUrls: ['./organization-new.component.css']
})
export class OrganizationNewComponent implements OnInit {

  newOrganizationForm: FormGroup;
  
    constructor(private organizationService: OrganizationService,
      private nzMessageService: NzMessageService,
      private router: Router,) { }
  
    ngOnInit() {
      this.newOrganizationForm = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required)
      });
      
    }
    onSubmit(){
      var name = this.newOrganizationForm.value['name'];
      var description = this.newOrganizationForm.value['description'];
      const newOrg  = new Organization(name, "org"+(Math.random()* (10 - 100) + 1), "gov", description);
      console.log(newOrg);
      this.organizationService.addOrganization(newOrg);
     this.nzMessageService.info('Organization Deleted Successfully. ');
    
    this.router.navigate(["organizations"]);
     
    }
  
  
  
  // onSubmit() {
  //   const newOrg  = new Organization(this.validateForm.get['orgName'], "org"+(Math.random()* (10 - 100) + 1), "gov", this.validateForm.value['orgDesc']);
  
  //   this.organizationService.addOrganization(newOrg);
  //    this.nzMessageService.info('Organization Deleted Successfully. ');
    
  //   this.router.navigate(["organizations"]);
  // }
  onCancel() {
    
    this.router.navigate(["organizations"]);
  }

  // // onClear() {
  // //   this.validateForm.reset();
  // // }
 

}

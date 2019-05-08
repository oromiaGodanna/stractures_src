import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-department-new',
  templateUrl: './department-new.component.html',
  styleUrls: ['./department-new.component.css']
})
export class DepartmentNewComponent implements OnInit {

  alterForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.alterForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    
  }
  onSubmit(){
    var name = this.alterForm.value['name'];
    var description = this.alterForm.value['description'];
    console.log(name);
    console.log(description);
   
  }

}

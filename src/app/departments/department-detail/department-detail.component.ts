import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../department.model';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  @Input() department:Department;
  constructor(private route: ActivatedRoute,
    private departmentService: DepartmentService
    ) { }
  ngOnInit() {
    this.getDepartment();
}

getDepartment(): void {
  const name = this.route.snapshot.paramMap.get('name');
  this.departmentService.getDepartment(name).subscribe(department => this.department = department);
}

// goBack(): void {
//   this.location.back();
// }

}

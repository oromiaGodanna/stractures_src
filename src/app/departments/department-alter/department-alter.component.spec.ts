import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAlterComponent } from './department-alter.component';

describe('DepartmentAlterComponent', () => {
  let component: DepartmentAlterComponent;
  let fixture: ComponentFixture<DepartmentAlterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentAlterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

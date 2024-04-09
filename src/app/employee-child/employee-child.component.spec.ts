import { ComponentFixture, TestBed } from '@angular/core/testing';

import { employeeChildComponent } from './employee-child.component';

describe('employeeChildComponent', () => {
  let component: employeeChildComponent;
  let fixture: ComponentFixture<employeeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [employeeChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(employeeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

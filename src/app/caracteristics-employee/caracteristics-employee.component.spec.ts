import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicsemployeeComponent } from './caracteristics-employee.component';

describe('CaracteristicsemployeeComponent', () => {
  let component: CaracteristicsemployeeComponent;
  let fixture: ComponentFixture<CaracteristicsemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicsemployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaracteristicsemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

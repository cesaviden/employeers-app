import { Component, Input } from '@angular/core';
import { employee } from '../employee.model';
import { CaracteristicsemployeeComponent } from "../caracteristics-employee/caracteristics-employee.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-employee-child',
    standalone: true,
    templateUrl: './employee-child.component.html',
    styleUrl: './employee-child.component.css',
    imports: [CaracteristicsemployeeComponent, CommonModule, FormsModule]
})
export class employeeChildComponent {

  @Input() employee:employee;
  @Input() index: number;
  caracteristics: string[] = [];
  constructor() {}

  employees:employee [] = [
    new employee('John', 'Doe', 'Developer', 1000),
    new employee('Jane', 'Doe', 'Accountant', 1000),
    new employee('Jim', 'Doe', 'Administrator', 1000)
  ];

  addemployee(employee:employee) {
    this.employees.push(employee);
  }

  addCaracteristic(caracteristic: string) {
    this.caracteristics.push(caracteristic);
  }

}

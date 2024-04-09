import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Routes } from '@angular/router';
import { employee } from './employee.model';
import { CommonModule } from '@angular/common';
import { employeeChildComponent } from "./employee-child/employee-child.component";
import { employeesServiceService } from './employees-service.service';
import { EmployeesService } from './employees.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, CommonModule, employeeChildComponent]
})
export class AppComponent {
  title = 'employees-app';
  name: string = '';
  surname: string = '';
  position: string = '';
  salary: number = 0;
  employees:employee[] = [];
  
  constructor(private myService:employeesServiceService, private employeeService:EmployeesService) {

    this.employees = this.employeeService.employees;
  }


  addemployee() {
    let newemployee = new employee(this.name, this.surname, this.position, this.salary);
    this.employeeService.addEmployee(newemployee);
    //this.myService.viewMessage('Added employee ' + this.name);
    this.name = '';
    this.surname = '';
    this.position = '';
    this.salary = 0;
  }
}

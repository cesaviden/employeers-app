import { Injectable } from '@angular/core';
import { employee } from './employee.model';
import { employeesServiceService } from './employees-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees:employee [] = [
    new employee('John', 'Doe', 'Developer', 1000),
    new employee('Jane', 'Doe', 'Accountant', 1000),
    new employee('Jim', 'Doe', 'Administrator', 1000)
  ];

  constructor(private EmergentWindowService:employeesServiceService) { 

  }

  addEmployee(employee:employee) {
    this.EmergentWindowService.viewMessage('Added employee ' + employee.name);
    this.employees.push(employee);
  }

}

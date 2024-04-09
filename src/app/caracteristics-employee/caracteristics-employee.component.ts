import { Component, EventEmitter, Output } from '@angular/core';
import { employeesServiceService } from '../employees-service.service';

@Component({
  selector: 'app-caracteristics-employee',
  standalone: true,
  imports: [],
  templateUrl: './caracteristics-employee.component.html',
  styleUrl: './caracteristics-employee.component.css',
})
export class CaracteristicsemployeeComponent {
[x: string]: any;
  @Output() caracteristics = new EventEmitter<string>();

  constructor(private myService: employeesServiceService) {}

  addCaracteristics(caracteristics: string) {
    this.myService.viewMessage('Added caracteristics ' + caracteristics);
    this.caracteristics.emit(caracteristics);
    }
}

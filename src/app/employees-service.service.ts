import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class employeesServiceService {

  constructor() { }

  viewMessage(message: string) {
    alert(message);
  }
}

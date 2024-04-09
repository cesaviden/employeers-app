import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { employeesServiceService } from './employees-service.service';
import { EmployeesService } from './employees.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), employeesServiceService, EmployeesService],
};

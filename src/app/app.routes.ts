import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { HowWeAreComponent } from './howweare/howweare.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'howweare', component: HowWeAreComponent},
];

import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { CompaniesComponent } from './companies/companies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

// @ts-ignore
export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'companies', component: CompaniesComponent },

];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { B2bComponent } from './components/b2b/b2b.component';
import { ContractOfEmploymentComponent } from './components/contract-of-employment/contract-of-employment.component';

const routes: Routes = [
    { path: '', redirectTo: '/SalaryCalculator/B2B', pathMatch: 'full' },
    { path: 'SalaryCalculator/B2B', component: B2bComponent },
    { path: 'ContractOfEmployment', component: ContractOfEmploymentComponent },
    
  ];
  
  @NgModule({
      declarations: [],
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
  })
  
  export class CalcRoutingModule { }
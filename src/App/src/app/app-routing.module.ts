import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/SalaryCalculator/B2B', pathMatch: 'full' },
  { path: 'SalaryCalculator', loadChildren: () => import('./modules/calc/calc.module').then((module) => module.CalcModule) },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core'; 
import { B2bComponent } from './components/b2b/b2b.component';
import { ContractOfEmploymentComponent } from './components/contract-of-employment/contract-of-employment.component';
import { CalcRoutingModule } from './calc-routing.module';



@NgModule({
  declarations: [B2bComponent, ContractOfEmploymentComponent],
  imports: [
    CalcRoutingModule
  ]
})
export class CalcModule { }

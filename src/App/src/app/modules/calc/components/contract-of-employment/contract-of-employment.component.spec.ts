import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractOfEmploymentComponent } from './contract-of-employment.component';

describe('ContractOfEmploymentComponent', () => {
  let component: ContractOfEmploymentComponent;
  let fixture: ComponentFixture<ContractOfEmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractOfEmploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractOfEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

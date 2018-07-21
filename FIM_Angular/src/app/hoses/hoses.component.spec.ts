import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosesComponent } from './hoses.component';

describe('HosesComponent', () => {
  let component: HosesComponent;
  let fixture: ComponentFixture<HosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

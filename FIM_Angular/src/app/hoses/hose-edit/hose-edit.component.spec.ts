import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoseEditComponent } from './hose-edit.component';

describe('HoseEditComponent', () => {
  let component: HoseEditComponent;
  let fixture: ComponentFixture<HoseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

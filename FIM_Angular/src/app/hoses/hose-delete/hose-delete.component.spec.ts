import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoseDeleteComponent } from './hose-delete.component';

describe('HoseDeleteComponent', () => {
  let component: HoseDeleteComponent;
  let fixture: ComponentFixture<HoseDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoseDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

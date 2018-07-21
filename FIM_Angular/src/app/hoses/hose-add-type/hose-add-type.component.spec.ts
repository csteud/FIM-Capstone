import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoseAddTypeComponent } from './hose-add-type.component';

describe('HoseAddTypeComponent', () => {
  let component: HoseAddTypeComponent;
  let fixture: ComponentFixture<HoseAddTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoseAddTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoseAddTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

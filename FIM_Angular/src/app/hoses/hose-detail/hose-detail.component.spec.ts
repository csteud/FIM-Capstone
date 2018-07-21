import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoseDetailComponent } from './hose-detail.component';

describe('HoseDetailComponent', () => {
  let component: HoseDetailComponent;
  let fixture: ComponentFixture<HoseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

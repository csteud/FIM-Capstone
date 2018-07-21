import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoseItemComponent } from './hose-item.component';

describe('HoseItemComponent', () => {
  let component: HoseItemComponent;
  let fixture: ComponentFixture<HoseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

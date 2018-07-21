import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoseListComponent } from './hose-list.component';

describe('HoseListComponent', () => {
  let component: HoseListComponent;
  let fixture: ComponentFixture<HoseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

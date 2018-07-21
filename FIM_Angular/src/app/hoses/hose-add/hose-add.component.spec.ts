import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoseAddComponent } from './hose-add.component';

describe('HoseAddComponent', () => {
  let component: HoseAddComponent;
  let fixture: ComponentFixture<HoseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

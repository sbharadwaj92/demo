import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmComponentComponent } from './farm-component.component';

describe('FarmComponentComponent', () => {
  let component: FarmComponentComponent;
  let fixture: ComponentFixture<FarmComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

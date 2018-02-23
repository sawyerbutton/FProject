import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhcoComponent } from './bhco.component';

describe('BhcoComponent', () => {
  let component: BhcoComponent;
  let fixture: ComponentFixture<BhcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

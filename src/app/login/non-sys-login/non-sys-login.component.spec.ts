import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonSysLoginComponent } from './non-sys-login.component';

describe('NonSysLoginComponent', () => {
  let component: NonSysLoginComponent;
  let fixture: ComponentFixture<NonSysLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonSysLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonSysLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

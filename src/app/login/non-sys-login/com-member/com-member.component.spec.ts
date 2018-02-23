import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComMemberComponent } from './com-member.component';

describe('ComMemberComponent', () => {
  let component: ComMemberComponent;
  let fixture: ComponentFixture<ComMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

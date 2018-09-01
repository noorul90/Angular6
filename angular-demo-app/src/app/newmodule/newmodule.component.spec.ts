import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmoduleComponent } from './newmodule.component';

describe('NewmoduleComponent', () => {
  let component: NewmoduleComponent;
  let fixture: ComponentFixture<NewmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

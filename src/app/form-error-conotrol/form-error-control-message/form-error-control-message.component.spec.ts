import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorControlMessageComponent } from './form-error-control-message.component';

describe('FormErrorControlMessageComponent', () => {
  let component: FormErrorControlMessageComponent;
  let fixture: ComponentFixture<FormErrorControlMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormErrorControlMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorControlMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

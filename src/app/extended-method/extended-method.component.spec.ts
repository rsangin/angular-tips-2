import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedMethodComponent } from './extended-method.component';

describe('ExtendedMethodComponent', () => {
  let component: ExtendedMethodComponent;
  let fixture: ComponentFixture<ExtendedMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

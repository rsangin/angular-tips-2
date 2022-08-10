import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastComponentComponent } from './fast-component.component';

describe('FastComponentComponent', () => {
  let component: FastComponentComponent;
  let fixture: ComponentFixture<FastComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

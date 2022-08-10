import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowComponentComponent } from './slow-component.component';

describe('SlowComponentComponent', () => {
  let component: SlowComponentComponent;
  let fixture: ComponentFixture<SlowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlowComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

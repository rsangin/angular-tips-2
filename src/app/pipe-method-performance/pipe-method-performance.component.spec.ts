import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeMethodPerformanceComponent } from './pipe-method-performance.component';

describe('PipeMethodPerformanceComponent', () => {
  let component: PipeMethodPerformanceComponent;
  let fixture: ComponentFixture<PipeMethodPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeMethodPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeMethodPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

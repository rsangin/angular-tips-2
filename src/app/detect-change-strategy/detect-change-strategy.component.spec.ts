import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectChangeStrategyComponent } from './detect-change-strategy.component';

describe('DetectChangeStrategyComponent', () => {
  let component: DetectChangeStrategyComponent;
  let fixture: ComponentFixture<DetectChangeStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectChangeStrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectChangeStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-detect-change-strategy',
  templateUrl: './detect-change-strategy.component.html',
  styleUrls: ['./detect-change-strategy.component.scss'],
})
export class DetectChangeStrategyComponent {
  public x: number = 0;
  public y: number = 0;

  @Input()
  public isSlow = false;

  @HostListener('mousemove', ['$event'])
  public mouseMove(event: MouseEvent): void {
    this.x = event.clientX;
    this.y = event.clientY;
  }
}

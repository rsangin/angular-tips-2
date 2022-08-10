import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetectChangeStrategyComponent } from './detect-change-strategy/detect-change-strategy.component';
import { DynamicComponentLoaderComponent } from './dynamic-component-loader/dynamic-component-loader.component';
import { ExtendedMethodComponent } from './extended-method/extended-method.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ObjectAssignComponent } from './object-assign/object-assign.component';
import { PipeMethodPerformanceComponent } from './pipe-method-performance/pipe-method-performance.component';
import { PromiseObservableComponent } from './promise-observable/promise-observable.component';

const routes: Routes = [
  { path: 'object-assign', component: ObjectAssignComponent },
  { path: 'extended-method', component: ExtendedMethodComponent },
  {
    path: 'dynamic-component-loader',
    component: DynamicComponentLoaderComponent,
  },
  { path: 'promise-observable', component: PromiseObservableComponent },
  { path: 'detect-change-strategy', component: DetectChangeStrategyComponent },
  {
    path: 'pipe-method-performance',
    component: PipeMethodPerformanceComponent,
  },
  { path: '', pathMatch: 'full', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

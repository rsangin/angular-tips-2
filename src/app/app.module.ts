import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectAssignComponent } from './object-assign/object-assign.component';
import { ExtendedMethodComponent } from './extended-method/extended-method.component';
import { DynamicComponentLoaderComponent } from './dynamic-component-loader/dynamic-component-loader.component';
import { PromiseObservableComponent } from './promise-observable/promise-observable.component';
import { DetectChangeStrategyComponent } from './detect-change-strategy/detect-change-strategy.component';
import { PipeMethodPerformanceComponent } from './pipe-method-performance/pipe-method-performance.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SlowComponentComponent } from './detect-change-strategy/slow-component/slow-component.component';
import { FastComponentComponent } from './detect-change-strategy/fast-component/fast-component.component';
import { RandomPipe } from './detect-change-strategy/fast-component/pipes/random.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AddArithmaticOperationComponent } from './dynamic-component-loader/add-arithmatic-operation/add-arithmatic-operation.component';
import { MultiplyArithmaticOperationComponent } from './dynamic-component-loader/multiply-arithmatic-operation/multiply-arithmatic-operation.component';
import { SubtractArithmaticOperationComponent } from './dynamic-component-loader/subtract-arithmatic-operation/subtract-arithmatic-operation.component';
import { FormsModule } from '@angular/forms';
import { OperationViewLoaderDirective } from './dynamic-component-loader/operation-view-loader.directive';

@NgModule({
  declarations: [
    AppComponent,
    ObjectAssignComponent,
    ExtendedMethodComponent,
    DynamicComponentLoaderComponent,
    PromiseObservableComponent,
    DetectChangeStrategyComponent,
    PipeMethodPerformanceComponent,
    LandingPageComponent,
    SlowComponentComponent,
    FastComponentComponent,
    RandomPipe,
    AddArithmaticOperationComponent,
    MultiplyArithmaticOperationComponent,
    SubtractArithmaticOperationComponent,
    OperationViewLoaderDirective,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

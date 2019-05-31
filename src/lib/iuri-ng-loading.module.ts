import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { IuriNgLoadingComponent } from './iuri-ng-loading.component';

@NgModule({
  declarations: [IuriNgLoadingComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    IuriNgLoadingComponent
  ]
})
export class IuriNgLoadingModule { }

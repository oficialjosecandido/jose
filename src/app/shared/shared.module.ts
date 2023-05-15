// Core Module
import { NgModule } from '@angular/core';

// Common Module
import { CommonModule } from '@angular/common';

// Forms Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Boostrap Module
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// Http Client Module
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ]
})
export class SharedModule { }

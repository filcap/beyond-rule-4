import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { YnabService } from './ynab.service';
import { YnabComponent } from './ynab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    YnabComponent,
  ],
  exports: [
    YnabComponent,
  ],
  providers: [
    YnabService,
  ]
})
export class YnabModule { }
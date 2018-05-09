import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}

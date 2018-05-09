import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogComponent } from './log/log.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, DashboardComponent, LogComponent]
})
export class HomeModule {
}

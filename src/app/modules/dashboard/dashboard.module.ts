import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    NgApexchartsModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }

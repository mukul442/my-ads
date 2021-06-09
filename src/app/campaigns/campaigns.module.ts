import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { CampaignCreateComponent } from './campaign-create/campaign-create.component';
import { CampaignPerformanceComponent } from './campaign-performance/campaign-performance.component';
import { CampaignContentComponent } from './campaign-content/campaign-content.component';
import { CampaignWidgetsComponent } from './campaign-widgets/campaign-widgets.component';
import { CampaignHeaderComponent } from './campaign-header/campaign-header.component';
import { CampaignContentCreateComponent } from './campaign-content-create/campaign-content-create.component';


@NgModule({
  declarations: [
    CampaignListComponent,
    CampaignDetailsComponent,
    CampaignCreateComponent,
    CampaignPerformanceComponent,
    CampaignContentComponent,
    CampaignWidgetsComponent,
    CampaignHeaderComponent,
    CampaignContentCreateComponent
  ],
  imports: [
    CommonModule,
    CampaignsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CampaignsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { CampaignCreateComponent } from './campaign-create/campaign-create.component';


@NgModule({
  declarations: [
    CampaignListComponent,
    CampaignDetailsComponent,
    CampaignCreateComponent
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

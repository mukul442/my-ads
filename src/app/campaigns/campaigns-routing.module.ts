import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignAddContentComponent } from './campaign-add-content/campaign-add-content.component';
import { CampaignContentComponent } from './campaign-content/campaign-content.component';
import { CampaignCreateComponent } from './campaign-create/campaign-create.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { CampaignEditContentComponent } from './campaign-edit-content/campaign-edit-content.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignPerformanceComponent } from './campaign-performance/campaign-performance.component';
import { CampaignWidgetsComponent } from './campaign-widgets/campaign-widgets.component';

const routes: Routes = [
  {path: '', component: CampaignListComponent},
  {path: 'campaign/:id', children:[
    {path: 'performance', component: CampaignPerformanceComponent},
    {path: 'settings', component: CampaignDetailsComponent},
    {path: 'content', component: CampaignContentComponent},
    {path: 'content/create', component: CampaignAddContentComponent},
    {path: 'content/:content', component: CampaignEditContentComponent},
    {path: 'widgets', component: CampaignWidgetsComponent}
  ]}, //need to make child urls for campaign details
  {path: 'create', component: CampaignCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }

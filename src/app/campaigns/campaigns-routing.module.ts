import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignCreateComponent } from './campaign-create/campaign-create.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';

const routes: Routes = [
  {path: '', component: CampaignListComponent},
  {path: 'campaign/:id', component: CampaignDetailsComponent},
  {path: 'create', component: CampaignCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }

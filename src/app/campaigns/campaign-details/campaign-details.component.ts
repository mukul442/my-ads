import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../campaign';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  campaign: Campaign | undefined;
  campaign_id = Number(this.route.snapshot.paramMap.get('id'));
  
  constructor( 
    private route: ActivatedRoute,
    private location: Location,
    private campaignService: CampaignService,
    private router: Router 
    ) { }

  ngOnInit(): void {
    this.getCampaign();
  }

  getCampaign(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.campaignService.getCampaign(id).subscribe(campaign => this.campaign = campaign);
  }

  goBack(): void {
    this.location.back();
  }

  updateCampaign(campaign: Campaign){
    this.campaignService.updateCampaign(campaign).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

}

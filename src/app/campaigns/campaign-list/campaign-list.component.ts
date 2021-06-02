import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  campaigns: Campaign[] = [];

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.getCampaigns();
  }

  getCampaigns(): void{
    this.campaignService.getCampaigns().subscribe(campaigns => this.campaigns = campaigns);
  }

  delete(campaign: Campaign): void {
    this.campaignService.deleteCampaign(campaign.id).subscribe(() => {
      this.getCampaigns()
    });
  }
}

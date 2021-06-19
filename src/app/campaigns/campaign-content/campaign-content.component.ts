import { Component, OnInit } from '@angular/core';
import { Campaign, Content } from '../campaign';
import { CampaignService } from '../campaign.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campaign-content',
  templateUrl: './campaign-content.component.html',
  styleUrls: ['./campaign-content.component.css']
})
export class CampaignContentComponent implements OnInit {

  campaign: Campaign | undefined;
  modalTitle:string = "Add Content";

  constructor(private campaignService: CampaignService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.showContents();
  }

  showContents() {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    return this.campaignService.getContents(id).subscribe(response => this.campaign = response);
  }

}

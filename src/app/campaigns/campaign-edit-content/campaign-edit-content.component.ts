import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Content } from '../campaign';
import { CampaignService } from '../campaign.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-edit-content',
  templateUrl: './campaign-edit-content.component.html',
  styleUrls: ['./campaign-edit-content.component.css']
})
export class CampaignEditContentComponent implements OnInit {

  content: Content | undefined;
  campaign_id = Number(this.router.snapshot.paramMap.get('id'));
  content_id = Number(this.router.snapshot.paramMap.get('content'));

  constructor(
    private location: Location, 
    private campaignService: CampaignService,
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    this.campaignService.getContent(this.content_id).subscribe(content => this.content = content);
  }

  updateContent(content: Content) {
    this.campaignService.updateContent(content).subscribe((res) => {
      this.route.navigate([`/campaign/${this.campaign_id}/content`])
    })
  }

  goBack() {
    this.location.back();
  }

}

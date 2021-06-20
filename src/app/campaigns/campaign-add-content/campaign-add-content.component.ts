import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign-add-content',
  templateUrl: './campaign-add-content.component.html',
  styleUrls: ['./campaign-add-content.component.css']
})
export class CampaignAddContentComponent implements OnInit {

  campaign_id = Number(this.router.snapshot.paramMap.get('id'));

  contentForm = new FormGroup({
    campaign: new FormControl(this.campaign_id),
    url: new FormControl(''),
    title: new FormControl(''),
    brand_name: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private router: ActivatedRoute, private campaignService: CampaignService, private route: Router) { }

  ngOnInit(): void {
  }

  addContent() {
    this.campaignService.addContent(this.contentForm.value).subscribe((response) => {
      this.contentForm.reset();
      this.route.navigate([`/campaign/${this.campaign_id}/content`]);
    })
  }

}

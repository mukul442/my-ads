import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CampaignService } from '../campaign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.css']
})
export class CampaignCreateComponent implements OnInit {

  campaignForm = new FormGroup({
    name: new FormControl(''),
    cpc: new FormControl(''),
    budget: new FormControl(''),
    scheduling: new FormGroup({
      startDate: new FormControl(''),
      endDate: new FormControl('')
    })
  });

  constructor(private campaignService: CampaignService, private route: Router) { }

  ngOnInit(): void {
  }

  addCampaign(){
    this.campaignService.addCampaign(this.campaignForm.value).subscribe((response) => {
      this.campaignForm.reset()
      this.route.navigate(['/'])
    })
  }

}

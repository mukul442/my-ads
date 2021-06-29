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
    bidType: new FormControl(''),
    cpc: new FormControl(''),
    budget: new FormControl(''),
    pacing: new FormControl(''),
    scheduling: new FormGroup({
      startDate: new FormControl(''),
      endDate: new FormControl('')
    }),
    targeting: new FormGroup({
      trafficTypes: new FormGroup({
        adBlock: new FormControl(''),
        native: new FormControl(''),
        pushNotification: new FormControl('')
      }),
      countryTarget: new FormControl(''),
      zipTarget: new FormControl(''),
      metroTarget: new FormControl(''),
      languageTarget: new FormControl('')
    })
  });

  constructor(private campaignService: CampaignService, private route: Router) { }

  ngOnInit(): void {
  }

  addCampaignTest() {
    console.log(this.campaignForm.value);
  }

  addCampaign(){
    this.campaignService.addCampaign(this.campaignForm.value).subscribe((response) => {
      this.campaignForm.reset()
      this.route.navigate(['/'])
    })
  }

  

}

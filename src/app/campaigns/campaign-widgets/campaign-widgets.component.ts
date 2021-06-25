import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-campaign-widgets',
  templateUrl: './campaign-widgets.component.html',
  styleUrls: ['./campaign-widgets.component.css']
})
export class CampaignWidgetsComponent implements OnInit {
  campaign_id = Number(this.router.snapshot.paramMap.get('id'));

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}

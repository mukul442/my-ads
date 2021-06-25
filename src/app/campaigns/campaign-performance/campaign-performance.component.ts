import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-campaign-performance',
  templateUrl: './campaign-performance.component.html',
  styleUrls: ['./campaign-performance.component.css']
})
export class CampaignPerformanceComponent implements OnInit {
  campaign_id = Number(this.router.snapshot.paramMap.get('id'));

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}

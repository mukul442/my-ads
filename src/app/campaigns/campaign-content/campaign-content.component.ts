import { Component, OnInit } from '@angular/core';
import { Content } from '../campaign';
import { CONTENT } from '../mock-content';

@Component({
  selector: 'app-campaign-content',
  templateUrl: './campaign-content.component.html',
  styleUrls: ['./campaign-content.component.css']
})
export class CampaignContentComponent implements OnInit {

  contents: Content[] = CONTENT;
  modalTitle:string = "Add Content";

  constructor() { }

  ngOnInit(): void {
  }

}

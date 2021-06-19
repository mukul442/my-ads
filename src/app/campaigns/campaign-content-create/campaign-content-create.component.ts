import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-campaign-content-create',
  templateUrl: './campaign-content-create.component.html',
  styleUrls: ['./campaign-content-create.component.css']
})
export class CampaignContentCreateComponent implements OnInit {

  contentForm = new FormGroup({
    url: new FormControl(''),
    title: new FormControl(''),
    brand: new FormControl(''),
    description: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  addContent() {
    console.log(this.contentForm.value);
  }

}

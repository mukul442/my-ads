import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PublisherService } from '../publisher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sites-create',
  templateUrl: './sites-create.component.html',
  styleUrls: ['./sites-create.component.css']
})
export class SitesCreateComponent implements OnInit {

  siteForm = new FormGroup({
    siteName: new FormControl('')
  })

  constructor(private publisherService: PublisherService, private router: Router) { }

  ngOnInit(): void {
  }

  addSite() {
    this.publisherService.addSites(this.siteForm.value).subscribe((response) => {
      this.siteForm.reset()
      this.router.navigate(['/sites/list'])
    })
  }

}

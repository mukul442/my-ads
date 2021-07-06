import { Component, OnInit } from '@angular/core';
import { Sites } from '../publishers';
import { PublisherService } from '../publisher.service';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.css']
})
export class SitesListComponent implements OnInit {
  sites: Sites[] = [];

  constructor(private publisherService: PublisherService) { }

  ngOnInit(): void {
    this.showSites();
  }

  showSites(): void {
    this.publisherService.getSites().subscribe((response) => {this.sites = response});
  }

}

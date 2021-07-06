import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sites } from './publishers';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  publisherUrl = "http://127.0.0.1:8000/publishers/"

  constructor(private http: HttpClient) { }

  //get sites list
  getSites(): Observable<Sites[]> {
    return this.http.get<Sites[]>(this.publisherUrl);
  }

  // add site
  addSites(site: Sites): Observable<Sites> {
    return this.http.post<Sites>(this.publisherUrl, site);
  }
}

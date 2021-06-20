import { Injectable } from '@angular/core';
import { Campaign, Content } from './campaign';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private campaignUrl = "http://127.0.0.1:8000/campaign/";
  private contentUrl = "http://127.0.0.1:8000/content/";

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.campaignUrl);
  }

  /** GET campaign by id. Will 404 if id not found */

  getCampaign(id: number): Observable<Campaign> {
    const url = `${this.campaignUrl}${id}/`;
    return this.http.get<Campaign>(url);
  }

  /** PUT request **/
  updateCampaign(campaign: Campaign): Observable<any> {
    return this.http.put(this.campaignUrl + campaign.id + '/', campaign);
  }

  /*POST request*/
  addCampaign(campaign: Campaign): Observable<Campaign>{
    return this.http.post<Campaign>(this.campaignUrl, campaign);
  }

  /*Delete request*/
  deleteCampaign(id: number): Observable<Campaign> {
    const url = `${this.campaignUrl}${id}/`;
    return this.http.delete<Campaign>(url);
  }

  /*Content Https*/
  getContents(id: number): Observable<Campaign> {
    const url = `${this.campaignUrl}${id}/`;
    return this.http.get<Campaign>(url);
  }

  /** GET campaign by id. Will 404 if id not found */

  getContent(id: number): Observable<Content> {
    const url = `${this.contentUrl}${id}/`;
    return this.http.get<Content>(url);
  }


  /* Add Content */
  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>(this.contentUrl, content);
  }

  /* Edit content */
  updateContent(content: Content): Observable<any> {
    return this.http.put<Content>(this.contentUrl + content.id + '/', content)
  }

  /* Delete Content */
  deleteContent(id: number): Observable<Content> {
    const url = `${this.contentUrl}${id}/`;
    return this.http.delete<Content>(url);
  }

}

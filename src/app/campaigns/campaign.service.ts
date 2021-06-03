import { Injectable } from '@angular/core';
import { Campaign } from './campaign';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private campaignUrl = "http://localhost:3000/campaigns";

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.campaignUrl);
  }

  /** GET campaign by id. Will 404 if id not found */

  getCampaign(id: number): Observable<Campaign> {
    const url = `${this.campaignUrl}/${id}`;
    return this.http.get<Campaign>(url);
  }

  /** PUT request **/
  updateCampaign(campaign: Campaign): Observable<any> {
    return this.http.put(this.campaignUrl + '/' + campaign.id, campaign);
  }

  /*POST request*/
  addCampaign(campaign: Campaign): Observable<Campaign>{
    return this.http.post<Campaign>(this.campaignUrl, campaign);
  }

  /*Delete request*/
  deleteCampaign(id: number): Observable<Campaign> {
    const url = `${this.campaignUrl}/${id}`;
    return this.http.delete<Campaign>(url);
  }
}

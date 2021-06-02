import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CampaignsModule } from './campaigns/campaigns.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CampaignsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

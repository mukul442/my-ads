import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { PublishersRoutingModule } from './publishers-routing.module';
import { SitesListComponent } from './sites-list/sites-list.component';
import { SitesCreateComponent } from './sites-create/sites-create.component';
import { PublisherHeaderComponent } from './publisher-header/publisher-header.component';


@NgModule({
  declarations: [
  
    SitesListComponent,
       SitesCreateComponent,
       PublisherHeaderComponent
  ],
  imports: [
    CommonModule,
    PublishersRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublishersModule { }

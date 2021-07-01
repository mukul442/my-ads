import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishersRoutingModule } from './publishers-routing.module';
import { SitesListComponent } from './sites-list/sites-list.component';
import { SitesCreateComponent } from './sites-create/sites-create.component';


@NgModule({
  declarations: [
  
    SitesListComponent,
       SitesCreateComponent
  ],
  imports: [
    CommonModule,
    PublishersRoutingModule
  ]
})
export class PublishersModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitesCreateComponent } from './sites-create/sites-create.component';
import { SitesListComponent } from './sites-list/sites-list.component';

const routes: Routes = [
  {path: 'sites', children: [
    {path: 'list', component: SitesListComponent},
    {path: 'create', component: SitesCreateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishersRoutingModule { }

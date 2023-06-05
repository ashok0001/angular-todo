import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetureRoutingModule } from './feture-routing.module';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './page/profile/profile.component';
import { FetureComponent } from './feture.component';
import { TasksComponent } from './page/tasks/tasks.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    FetureComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    FetureRoutingModule,
    SharedModule
  ]
})
export class FetureModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetureComponent } from './feture.component';
import { ProfileComponent } from './page/profile/profile.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: FetureComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: '', component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FetureRoutingModule {}

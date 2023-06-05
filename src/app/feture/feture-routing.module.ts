import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetureComponent } from './feture.component';
import { ProfileComponent } from './page/profile/profile.component';
import { HomeComponent } from './page/home/home.component';
import { TasksComponent } from './page/tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: FetureComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: '', component: HomeComponent },
      { path: 'tasks', component: TasksComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FetureRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TaskCardComponent,
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule, MatButtonModule, MatIconModule
  ],
  exports:[
    NavbarComponent,FooterComponent,TaskCardComponent
  ]
})
export class SharedModule { }

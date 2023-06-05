import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {

  @Input() task:any;

  checkBoxOnChange=(e:any)=>{
    const value=e.checked;
    console.log('check box value - ', value)
  }
}

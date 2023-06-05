import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: any[] = [
    {
      title: 'Task 1',
      description: 'Description for Task 1',
      status: 'In Progress',
      createdAt: new Date('2023-01-01'),
      deadline: new Date('2023-01-10')
    },
    {
      title: 'Task 2',
      description: 'Description for Task 2',
      status: 'Completed',
      createdAt: new Date('2023-02-05'),
      deadline: new Date('2023-02-15')
    },
    {
      title: 'Task 3',
      description: 'Description for Task 3',
      status: 'Pending',
      createdAt: new Date('2023-03-10'),
      deadline: new Date('2023-03-20')
    },
    // Add more tasks as needed
    {
      title: 'Task 4',
      description: 'Description for Task 4',
      status: 'In Progress',
      createdAt: new Date('2023-04-15'),
      deadline: new Date('2023-04-25')
    },
    {
      title: 'Task 5',
      description: 'Description for Task 5',
      status: 'Completed',
      createdAt: new Date('2023-05-20'),
      deadline: new Date('2023-05-30')
    },
    {
      title: 'Task 6',
      description: 'Description for Task 6',
      status: 'Pending',
      createdAt: new Date('2023-06-25'),
      deadline: new Date('2023-07-05')
    },
    {
      title: 'Task 7',
      description: 'Description for Task 7',
      status: 'In Progress',
      createdAt: new Date('2023-07-30'),
      deadline: new Date('2023-08-09')
    },
    {
      title: 'Task 8',
      description: 'Description for Task 8',
      status: 'Completed',
      createdAt: new Date('2023-08-01'),
      deadline: new Date('2023-08-11')
    },
    {
      title: 'Task 9',
      description: 'Description for Task 9',
      status: 'Pending',
      createdAt: new Date('2023-09-05'),
      deadline: new Date('2023-09-15')
    },
    {
      title: 'Task 10',
      description: 'Description for Task 10',
      status: 'In Progress',
      createdAt: new Date('2023-10-10'),
      deadline: new Date('2023-10-20')
    }
  ];}

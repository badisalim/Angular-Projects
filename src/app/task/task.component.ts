import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';
import { TaskService } from '../task.service';
@Component({
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Array<Task> = [{ name: 'Eat', description: 'eat somthing', type: 'event', progress: 25 }];
  constructor(private service: TaskService) { }


  ngOnInit() {
    this.tasks = this.service.tasks;
  }

  delete(task: Task) {
    console.log(task);
    this.service.deleteTask(task);
  }

  addTaskToList(task: Task) {
    this.tasks.push(task);
  }

// tslint:disable-next-line: variable-name
  applyColor(number: number) {
    switch (true) {
      case (number <= 25):
        return { 'background-color': 'red' };
      case (number <= 50 && number > 25):
        return {
          'background-color': 'violet'
        };
      case (number > 50 && number <= 75):
        return { 'background-color': 'blue' };
      case (number > 75):
        return {
          'background-color': 'green'
        };
    }
  }

// tslint:disable-next-line: variable-name
  changeProgress(index: string | number, number: number) {
    console.log(index, number);
    this.tasks[index].progress = number;
  }
}


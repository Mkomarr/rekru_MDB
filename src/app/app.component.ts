import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask: string;
  toDoList: Array<string|number> = [];
  taskNumber = 0;

  addTask() {
    this.toDoList.push(++this.taskNumber);
  }

  removeLastTask(task) {
    task = this.toDoList.lastIndexOf(task);
    if (this.toDoList.length === 0 ) {
      return;
    } else {
      this.toDoList.splice(task);
    }
  }
  removeAllTasks() {
    this.toDoList = [];
    this.taskNumber = 0;
  }

}

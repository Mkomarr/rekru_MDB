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

// code after review
removeLastTask(task) {
  task = this.toDoList.lastIndexOf(task);
  if (this.toDoList.length > 0) {
    this.toDoList.splice(task);
  }
}

// start OLD code
  // removeLastTask(task) {
  //   task = this.toDoList.lastIndexOf(task);
  //   if (this.toDoList.length === 0) {
  //     return;
  //   } else {
  //     this.toDoList.splice(task);
  //   }
  // }
// end OLD CODE
  removeAllTasks() {
    this.toDoList = [];
    this.taskNumber = 0;
  }

}

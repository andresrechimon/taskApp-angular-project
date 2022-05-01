import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskList: Task[] = [];
  taskName:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    //CREATE TASK OBJECT
    const task:Task = {
      name: this.taskName,
      status: false
    }
    //ADD OBJECT INTO THE ARRAY
    this.taskList.push(task);
    //RESET FORM
    this.taskName = "";
  }

  update(index:number, task:Task):void{
    this.taskList[index].status = !task.status;
  }

  delete(index:number):void{
    this.taskList.splice(index, 1);
  }
}

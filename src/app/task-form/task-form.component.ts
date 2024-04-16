import { Component, EventEmitter, Input, OnInit, Output, numberAttribute, signal } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {
  @Output() SubmitTask = new EventEmitter<any>();
  //@Input({{transform: (numberTask:unknown) -> numberAttribute(numberTask,42)}}) numberTask = 0;
  @Input() numberTask: number = 1;
  //tasks: Task[] =[] ;
  newTask: Task = {
    number: 0,
    type: '',
    priority: '',
    status: '',
    title: '',
    description: '',
    assignee: '',
    creator: '',
    created: 0,
    updated: 0
  };
  
  constructor() { 
    //this.newTask.number = Math.floor(Math.random() * 10000);
    
  }
  priority = {
    "critical":"Критический",
    "high":"Высокий",
    "medium":"Средний",
    "low":"Низкий"
  };
  type_ = {
    "task":"Задача",
    "bug":"Баг"
  };
  status_ = {
    "new":"Новый" ,
    "in progress":"В работе" ,
    "completed":"Выполнено" ,
    "closed":"Закрыто" ,

  }
  /*cnt : number = 0;
  number = 0;
  type= '';
  priority= '';
  status= '';
  title= '';
  description= '';
  assignee= '';
  creator= '';
  created= 0;
  updated= 0;*/
  
  ngOnInit(): void {
    // Генерировать номер в момент инициализации формы
    this.newTask.number = this.numberTask;
    this.newTask.created = new Date().getTime();
    // Установить текущее время в качестве времени создания и последнего изменения
  }
  OnSubmit ()  {
    this.newTask.updated = new Date().getTime();
    this.SubmitTask.emit(this.newTask);
    // Установить текущее время в качестве времени создания и последнего изменение
  }
  OnreInitForm() {
    console.log('вызван в дочернем')
    //this.newTask.number = Math.floor(Math.random() * 10000);
     this.newTask.type= '';
     this.newTask.priority= '';
     this.newTask.status= '';
     this.newTask.title= '';
     this.newTask.description= '';
     this.newTask.assignee= '';
     this.newTask.creator= '';
     this.newTask.created = new Date().getDate();
     this.newTask.updated = this.newTask.created;
  }
}


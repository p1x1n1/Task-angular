import { Component, EventEmitter, Input, OnInit, Output, numberAttribute, signal } from '@angular/core';
import { Task } from '../task';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  taskForm = new FormGroup<Task>({
      number: new FormControl(0,{nonNullable: true}),
      type: new FormControl('' ,{nonNullable: true}),
      priority: new FormControl('', ),
      status: new FormControl('' ,{nonNullable: true}),
      title: new FormControl('' ,{nonNullable: true}),
      description: new FormControl('' ,{nonNullable: true}),
      assignee: new FormControl('' ,{nonNullable: true}),
      creator: new FormControl('' ,{nonNullable: true}),
      created: new FormControl(new Date() ,{nonNullable: true}),
      updated: new FormControl()
  });
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
  ngOnInit(): void {
    this.taskForm.controls['number'] = new FormControl<number>(this.numberTask,{nonNullable: true});
    // Генерировать номер в момент инициализации формы
    //this.newTask.number = this.numberTask;
    //this.newTask.created = new Date().getTime();
    // Установить текущее время в качестве времени создания и последнего изменения
  }
  OnSubmit ()  {
    if (this.taskForm.valid) {
    const task = this.taskForm.getRawValue();
    task.updated = new Date();
    console.log(task);
    this.SubmitTask.emit(task);
    }
    // Установить текущее время в качестве времени создания и последнего изменение
  }
}


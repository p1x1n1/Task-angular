import { Component, OnInit, effect, signal } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  showForm = signal<boolean>(false);
  counter = signal<number>(111);
  tasks: Task[] = [];
  receiveTaskData(task: any): void {
    console.log('вызван в родителе')
    console.log(task);
    this.tasks.push(task);
    console.log(this.tasks);
    console.log(this.showForm);
    this.counter.set(this.counter()+111);
    
    this.showForm.set(false);
    console.log(this.showForm);
  }
  constructor() { 
    effect(() => console.log(this.counter()));
  }
  click(){
    this.showForm.set(true);
  }
  ngOnInit(): void {
    // Здесь вы будете получать данные задач из базы данных или приложения
    this.showForm.set(false);
  }

}
import { WritableSignal } from "@angular/core";

  export class Task{
    constructor(
      public number: number,
      public type: string,
      public status: string,
      public priority: string,
      public title: string,
      public description: string,
      public assignee: string,
      public creator: string,
      public created: number ,
      public updated: number ){}
  }
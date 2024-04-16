import { FormControl } from "@angular/forms";
import { Data } from "@angular/router";


  export interface Task{
   
        number: FormControl <number>,
        type: FormControl<string>,
        status: FormControl<string>,
        priority: FormControl<string|null>,
        title: FormControl<string>,
        description: FormControl<string|null>,
        assignee: FormControl<string|null>,
        creator: FormControl<string>,
        created:  FormControl <Data>,
        updated:  FormControl <Data>,
  }
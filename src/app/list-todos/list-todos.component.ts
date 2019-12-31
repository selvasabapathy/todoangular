import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(public id : number, public description : string, public targetDate : Date, public done : boolean) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'To dance', new Date, false),
    new Todo(2, 'Learn Angular', new Date, true),
    new Todo(3, 'Visit India', new Date, false)
  ];

  constructor() { }

  ngOnInit() {
  }

}

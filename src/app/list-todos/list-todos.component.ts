import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(public num : number, public description : string, public targetDate : Date, public done : boolean) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  newTodoNum : number = -1;

  deleteMessage : string;

  todos : Todo[];

  constructor(private authService : HardcodedAuthService,  private todoService : TodoDataService, private router : Router) { }

  ngOnInit() {
    this.refreshTodo();
  }

  addTodo() : void {
    this.router.navigate(['todo', this.newTodoNum])
  }

  updateTodo(num : number) : void {
    console.log(`update todo ${num}`);
    this.router.navigate(['todo', num])
  }

  deleteTodo(num : number) : void {
    console.log(`delete todo ${num}`);
    this.todoService.deleteTodo(this.authService.getUsername(), num).subscribe(
      response => {
        this.deleteMessage = `Deleted '${num}'`
        this.refreshTodo();
      }
    )
  }

  refreshTodo() : void {
    this.todoService.retrieveAllTodos(this.authService.getUsername()).subscribe(
      response => {
        this.todos = response;
      }
    )
  }

}

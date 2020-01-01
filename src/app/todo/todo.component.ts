import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  newTodoNum : number = -1;

  num : number;
  todo : Todo = new Todo(-1, '', new Date, false);

  constructor(private router : Router, private route : ActivatedRoute, private authService : HardcodedAuthService, private todoService : TodoDataService) { }

  ngOnInit() {
    this.num = this.route.snapshot.params['num'];
    if (this.num != -1) {
      this.todoService.retrieveTodo(this.authService.getUsername(), this.num).subscribe(
        data => this.todo = data
      )  
    }
  }

  saveTodo() {
    if (this.num != -1) {
      this.todoService.updateTodo(this.authService.getUsername(), this.num, this.todo).subscribe(
        data => console.log(data)
      )
    } else {
      this.todo.done = false;
      this.todoService.createTodo(this.authService.getUsername(), this.todo).subscribe(
        data => console.log(data)
      );
    }
    this.router.navigate(['todos']);
  }

}

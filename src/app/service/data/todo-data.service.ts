import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient : HttpClient) { }

  createTodo(username: string, todo: Todo) {
    return this.httpClient.post(`http://localhost:8080/users/${username}/todos`, todo);
  }

  updateTodo(username: string, num: number, todo: Todo) {
    return this.httpClient.put(`http://localhost:8080/users/${username}/todos/${num}`, todo);
  }

  retrieveTodo(username: string, num: number) {
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${username}/todos/${num}`);
  }

  deleteTodo(username: string, num: number) {
    return this.httpClient.delete(`http://localhost:8080/users/${username}/todos/${num}`);
  }

  retrieveAllTodos(username: string) {
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

}

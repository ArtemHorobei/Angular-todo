import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray = [1, 2, 3];

  addTodo = (value) => {
    this.todoArray.push(value);
  };

  deleteTodo = (todo) => {
    this.todoArray = this.todoArray.filter(item => item !== todo);
  };
}

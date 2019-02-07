import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray = [1, 2, 3];
  isEdit = false;

  handleToggleEditItem = () => this.isEdit = !this.isEdit;

  addTodo = (value) => {
    this.todoArray.push(value);
  };

  deleteTodo = (todo) => {
    this.todoArray = this.todoArray.filter(item => item !== todo);
  };

  editTodo = (todo) => {
    this.todoArray = this.todoArray.map(item => {
      return item === todo ? todo : item;
    });
  };
}

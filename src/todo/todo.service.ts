import { Body, Inject, Injectable, NotFoundException, Param } from "@nestjs/common";
import { TodoEntity } from "./Entities/todo.entity";
import { Addtodo } from "./dto/addtodo";
import { Updatetodo } from "./dto/updatetodo";

@Injectable()
export class TodoService {
  constructor(@Inject('UUID') private readonly uuid: () => string) {
  }
  todos: TodoEntity[] = [];
  get() {
    console.log('done');
    return this.todos;
  }
  add(@Body() newtodo: Addtodo) {
    const todo = new TodoEntity(this.uuid(), newtodo.name, newtodo.description);
    this.todos.push(todo);
    return 'todo added successefuly';
  }
  getById(@Param('id') id) {
    const todo = this.todos.find((actualtodo) => actualtodo.id == id);
    if (todo) return todo;
    throw new NotFoundException('Todo n existe pas');
  }
  delete(@Param('id') id) {
    const index = this.todos.findIndex((todo) => todo.id == id);
    if (index >= 0) {
      this.todos.splice(index, 1);
    } else {
      throw new NotFoundException('le todo n existe pas ');
    }
    return {
      message: 'todo supprimé',
      count: 1,
    };
  }
  modifier(@Param('id') id, @Body() newtodo: Updatetodo) {
    const todo = this.getById(id);
    todo.description = newtodo.description ?? todo.description;
    todo.name = newtodo.name ? newtodo.name : todo.name;
    return todo;
  }

}

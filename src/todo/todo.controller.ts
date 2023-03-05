import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoEntity } from './Entities/todo.entity';
import { Addtodo } from "./dto/addtodo";
import { Updatetodo } from "./dto/updatetodo";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  get() {
    return this.todoService.get();
  }
  @Post()
  add(@Body() newtodo: Addtodo) {
    return this.todoService.add(newtodo);
  }
  @Get(':id')
  getById(@Param('id') id) {
    return this.todoService.getById(id);
  }
  @Delete(':id')
  delete(@Param('id') id) {
    return this.todoService.delete(id);
  }
  @Put(':id')
  modifier(@Param('id') id, @Body() newtodo: Updatetodo) {
    return this.todoService.modifier(id, newtodo);
  }
}

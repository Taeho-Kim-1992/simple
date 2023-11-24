import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoItemService } from './todo.service';
import { TodoItem } from 'src/models/TodoItem';

@Controller('todo')
export class TodoItemController {
  constructor(private todoItemService: TodoItemService) {}

  @Get()
  findAll() {
    return this.todoItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TodoItem> {
    return this.todoItemService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param() id: number) {
    await this.todoItemService.delete(id);
  }

  @Post()
  async create(@Body() todoItem: TodoItem) {
    await this.todoItemService.create(todoItem);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() todoItem: TodoItem) {
    await this.todoItemService.update(id, todoItem);
  }
}

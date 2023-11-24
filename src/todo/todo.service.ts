import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoItem } from 'src/models/TodoItem';
import { Repository } from 'typeorm';

@Injectable()
export class TodoItemService {
  constructor(
    @InjectRepository(TodoItem)
    private todoItemRepository: Repository<TodoItem>,
  ) {}

  findAll = (): Promise<TodoItem[]> => this.todoItemRepository.find();

  findOne = (id: number): Promise<TodoItem> =>
    this.todoItemRepository.findOneBy({ id: id });

  async create(todoItem: TodoItem) {
    await this.todoItemRepository.insert(todoItem);
  }

  async delete(id: number): Promise<void> {
    await this.todoItemRepository.delete(id);
  }

  async update(id: number, todoItem: TodoItem) {
    const updatedTodoItem: TodoItem = {
      id: id,
      task_name: todoItem.task_name,
      due_date: todoItem.due_date,
      priority: todoItem.priority,
      completed: todoItem.completed,
      assigned_to: todoItem.assigned_to,
      notes: todoItem.notes,
    };
    this.todoItemRepository.update(id, updatedTodoItem);
  }
}

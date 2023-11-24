import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoItem } from 'src/models/TodoItem';
import { TodoItemService } from './todo.service';
import { TodoItemController } from './todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TodoItem])],
  controllers: [TodoItemController],
  providers: [TodoItemService],
})
export class TodoItemModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Utils } from 'src/utils/modules';
import { TodoItemModule } from 'src/todo/todo.module';

@Module({
  imports: [Utils.TypeOrmModule, TodoItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

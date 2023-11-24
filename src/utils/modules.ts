import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoItem } from 'src/models/TodoItem';

export class Utils {
  private static entities = [TodoItem];
  static TypeOrmModule = TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'DevTodo',
    entities: this.entities,
    logging: true,
    synchronize: false,
  });
}

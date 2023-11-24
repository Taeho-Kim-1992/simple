import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TodoItem')
export class TodoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  task_name: string;

  @Column({ type: 'date' })
  due_date: Date;

  @Column({ length: 6 })
  priority: string;

  @Column({ type: 'boolean' })
  completed: boolean;

  @Column({ length: 50 })
  assigned_to: string;

  @Column({ type: 'text' })
  notes: string;
}

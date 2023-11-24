import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Priority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

@Entity('TodoItem')
export class TodoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  task_name: string;

  @Column({ type: 'date' })
  due_date: Date;

  @Column({ type: 'enum', enum: Priority, default: Priority.MEDIUM })
  priority: Priority;

  @Column({ type: 'boolean' })
  completed: boolean;

  @Column({ length: 50 })
  assigned_to: string;

  @Column({ type: 'text' })
  notes: string;
}

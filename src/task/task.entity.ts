import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('tasks')
export class TaskEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  completed: boolean;
}

import { Injectable } from '@nestjs/common';
import { ObjectID, Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskEntityRepository: Repository<TaskEntity>,
  ) {}

  async getTasks(): Promise<TaskEntity[]> {
    return this.taskEntityRepository.find();
  }

  async createTask(createTask: CreateTaskDto): Promise<TaskEntity> {
    return this.taskEntityRepository.save(createTask);
  }

  async removeTask(id: ObjectID) {
    return this.taskEntityRepository.delete(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { TaskEntity } from './task.entity';
import { ObjectID } from 'typeorm';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    console.log(createTaskDto);
    return this.taskService.createTask(createTaskDto);
  }

  @Get()
  getTasks(): Promise<TaskEntity[]> {
    return this.taskService.getTasks();
  }

  @Delete(':id')
  removeTask(@Param() id: ObjectID) {
    return this.taskService.removeTask(id);
  }
}

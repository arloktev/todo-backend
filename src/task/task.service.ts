import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  async getTasks() {
    return [
      {
        id: '1',
        name: 'Макарошки',
        completed: false,
      },
      {
        id: '2',
        name: 'Картошку',
        completed: false,
      },
      {
        id: '3',
        name: 'Биткоины',
        completed: false,
      },
      {
        id: '4',
        name: 'Изучить JavaScript',
        completed: false,
      },
      {
        id: '5',
        name: 'Изучить паттерны проектирования',
        completed: false,
      },
      {
        id: '6',
        name: 'ReactJS Hooks (useState, useReducer, useEffect и т.д.)',
        completed: false,
      },
      {
        id: '7',
        name: 'Redux (redux-observable, redux-saga)',
        completed: false,
      },
    ];
  }

  async addTask() {
    return 'add task from service';
  }
}

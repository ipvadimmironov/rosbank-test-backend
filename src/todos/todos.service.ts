import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {

  private readonly todos: Todo[] = [
    {
      caption: "First Todo",
      description: "Mydescription",
      isCompleted: false
    }
  ];


  create(createTodoDto: CreateTodoDto) {
    this.todos.push({ ...createTodoDto, isCompleted: false });

    return this.todos.length;
  }

  findAll() {
    return this.todos.map((el, ind) => ({
      id: ind + 1,
      ...el
    }));
  }

  findOne(id: number) {
    if (!this.todos[id - 1]) throw new NotFoundException();
    return this.todos[id - 1];
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    this.todos[id - 1] = { ...this.todos[id - 1], ...updateTodoDto };
    return `Updated Successfully`;
  }

  remove(id: number) {
    this.todos.splice(id - 1, 1);
    return `Deleted Successfully`;
  }
}

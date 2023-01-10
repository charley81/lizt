import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { Task } from '../../interfaces/interfaces';

@Component({
  tag: 'task-item',
  styleUrl: 'task-item.css',
  shadow: true,
})
export class TaskItem {
  @Prop() item: Task;

  @Event() deleteTask: EventEmitter;

  handleDeleteTask(task: Task) {
    this.deleteTask.emit(task);
  }

  render() {
    return (
      <li>
        {this.item['task']}
        <span class="icons">
          <ion-icon name="create-outline" class="edit"></ion-icon>
          <ion-icon name="trash-outline" class="delete" onClick={() => this.handleDeleteTask(this.item)}></ion-icon>
        </span>
      </li>
    );
  }
}

import { Component, Event, EventEmitter, Fragment, h, Prop, State } from '@stencil/core';
import { Task } from '../../interfaces/interfaces';

@Component({
  tag: 'task-item',
  styleUrl: 'task-item.css',
  shadow: true,
})
export class TaskItem {
  // props
  @Prop({ mutable: true }) item: Task;

  // state
  @State() editing: boolean = false;
  @State() task: string;

  // events
  @Event() deleteTask: EventEmitter;
  @Event() updateTask: EventEmitter;

  // methods
  handleInputChange(e: Event) {
    this.task = (e.target as HTMLInputElement).value;
  }

  handleUpdateTask(task: string) {
    const updatedTask = { ...this.item, task };
    this.updateTask.emit(updatedTask);
  }

  handleDeleteTask(task: Task) {
    this.deleteTask.emit(task);
  }

  componentWillLoad() {
    this.task = this.item['task'];
  }

  render() {
    let taskContent: HTMLInputElement | string;
    if (this.editing) {
      taskContent = (
        <Fragment>
          <input type="text" value={this.task} onInput={this.handleInputChange.bind(this)} />
          <span class="icons">
            <button
              onClick={() => {
                this.editing = false;
                this.handleUpdateTask(this.task);
              }}
            >
              save
            </button>
            <ion-icon name="trash-outline" class="delete" onClick={() => this.handleDeleteTask(this.item)}></ion-icon>
          </span>
        </Fragment>
      );
    } else {
      taskContent = (
        <Fragment>
          <li>{this.task}</li>
          <span class="icons">
            <ion-icon
              name="create-outline"
              class="edit"
              onClick={() => {
                this.editing = true;
              }}
            ></ion-icon>
            <ion-icon name="trash-outline" class="delete" onClick={() => this.handleDeleteTask(this.item)}></ion-icon>
          </span>
        </Fragment>
      );
    }

    return <li>{taskContent}</li>;
  }
}

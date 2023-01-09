import { Component, h, Host, State, Listen } from '@stencil/core';
import { Task } from '../../interfaces/interfaces';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @State() tasks: Task[] = [
    { task: 'build CRUD app', completed: false },
    { task: 'setup studio', completed: true },
    { task: 'produce fire track', completed: false },
  ];

  @Listen('newTask')
  newTask(e) {
    console.log(e.detail);
    const newTask = {
      task: e.detail,
      completed: false,
    };

    this.tasks = [...this.tasks, newTask];
  }

  render() {
    return (
      <Host>
        <main-header></main-header>
        <input-section></input-section>
        <list-section></list-section>
      </Host>
    );
  }
}

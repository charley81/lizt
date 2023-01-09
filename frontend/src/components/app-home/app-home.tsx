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
  async newTask(e) {
    try {
      const newTask = {
        task: e.detail,
        completed: false,
      };
      await fetch('http://localhost:8001/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Host>
        <main-header></main-header>
        <input-section></input-section>
        <list-section task={this.tasks}></list-section>
      </Host>
    );
  }
}

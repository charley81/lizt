import { Component, h, Host, State, Listen, Watch } from '@stencil/core';
import { Task } from '../../interfaces/interfaces';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  URL = 'http://localhost:8001/api/tasks';

  @State() tasks: Task[] = [];

  @Listen('newTask')
  async newTask(e) {
    try {
      const newTask = {
        task: e.detail,
        completed: false,
      };
      await fetch(this.URL, {
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

  @Watch('tasks')
  async getTasks() {
    try {
      const response = await fetch(this.URL);
      const json = await response.json();
      this.tasks = json;
    } catch (error) {
      console.log(error);
    }
  }

  // lifecycle methods
  connectedCallback() {
    // get/set initial task from DB
    this.getTasks();
  }

  componentWillUpdate() {
    this.getTasks();
  }

  render() {
    return (
      <Host>
        <main-header></main-header>
        <input-section></input-section>
        <list-section tasks={this.tasks}></list-section>
      </Host>
    );
  }
}

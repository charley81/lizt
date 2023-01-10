import { Component, h, Host, State, Listen, Watch } from '@stencil/core';
import { Task } from '../../interfaces/interfaces';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  // api URL
  URL = 'http://localhost:8001/api/tasks';

  @State() tasks: Task[] = [];

  // add a new task
  @Listen('newTask')
  async newTask(e) {
    const newTask = {
      task: e.detail,
      completed: false,
    };

    try {
      await fetch(this.URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      this.getTasks();
    } catch (error) {
      console.log(error);
    }
  }

  // delete a task
  @Listen('deleteTask')
  async deleteTask(data: Event) {
    try {
      await fetch(`${this.URL}/${data['detail']._id}`, {
        method: 'DELETE',
      });
      this.getTasks();
    } catch (error) {
      console.log(error);
    }
  }

  // get tasks from DB
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
  componentWillLoad() {
    // get/set initial task from DB before the component loads
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

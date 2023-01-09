import { Component, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'input-section',
  styleUrl: 'input-section.css',
  shadow: true,
})
export class InputSection {
  @Event() newTask: EventEmitter;
  @State() task: string = '';

  handleInputChange(e: Event) {
    this.task = (e.target as HTMLInputElement).value;
  }

  handleNewTask() {
    this.newTask.emit(this.task);
    this.task = '';
  }

  render() {
    return (
      <header>
        <input type="text" placeholder="enter a task..." value={this.task} onInput={this.handleInputChange.bind(this)} />
        <button onClick={this.handleNewTask.bind(this)}>Add</button>
      </header>
    );
  }
}

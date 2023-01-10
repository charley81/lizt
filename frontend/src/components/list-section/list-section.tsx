import { Component, h, Prop } from '@stencil/core';
import { Task } from '../../interfaces/interfaces';

@Component({
  tag: 'list-section',
  styleUrl: 'list-section.css',
  shadow: true,
})
export class ListSection {
  @Prop() tasks: Task[] = [];

  render() {
    return <ul>{!this.tasks.length ? <li>no task to show</li> : this.tasks.map(item => <task-item item={item}></task-item>)}</ul>;
  }
}

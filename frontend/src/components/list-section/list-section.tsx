import { Component, h, Prop } from '@stencil/core';
import { Task } from '../../interfaces/interfaces';

@Component({
  tag: 'list-section',
  styleUrl: 'list-section.css',
  shadow: true,
})
export class ListSection {
  @Prop() task: Task[] = [];

  render() {
    console.log(this.task);
    return (
      <ul>
        {this.task.map(item => (
          <li>{item.task}</li>
        ))}
      </ul>
    );
  }
}

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
    return (
      <ul>
        {!this.tasks.length ? (
          <li>no task to show</li>
        ) : (
          this.tasks.map(item => (
            <li>
              {item.task}
              <span class="icons">
                <ion-icon name="create-outline" class="edit"></ion-icon>
                <ion-icon name="trash-outline" class="delete"></ion-icon>
              </span>
            </li>
          ))
        )}
      </ul>
    );
  }
}

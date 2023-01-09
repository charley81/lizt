import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'list-section',
  styleUrl: 'list-section.css',
  shadow: true,
})
export class ListSection {
  render() {
    return (
      <Host>
        <h3>list section</h3>
      </Host>
    );
  }
}

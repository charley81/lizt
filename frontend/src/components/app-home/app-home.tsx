import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
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

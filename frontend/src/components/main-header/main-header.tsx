import { Component, h } from '@stencil/core';

@Component({
  tag: 'main-header',
  styleUrl: 'main-header.css',
  shadow: true,
})
export class MainHeader {
  render() {
    return (
      <nav>
        <div class="nav-center">
          <h3>Lizt</h3>
        </div>
      </nav>
    );
  }
}

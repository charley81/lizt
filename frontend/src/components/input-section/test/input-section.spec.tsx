import { newSpecPage } from '@stencil/core/testing';
import { InputSection } from '../input-section';

describe('input-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputSection],
      html: `<input-section></input-section>`,
    });
    expect(page.root).toEqualHtml(`
      <input-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-section>
    `);
  });
});

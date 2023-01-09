import { newSpecPage } from '@stencil/core/testing';
import { ListSection } from '../list-section';

describe('list-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListSection],
      html: `<list-section></list-section>`,
    });
    expect(page.root).toEqualHtml(`
      <list-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </list-section>
    `);
  });
});

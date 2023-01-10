import { newSpecPage } from '@stencil/core/testing';
import { TaskItem } from '../task-item';

describe('task-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TaskItem],
      html: `<task-item></task-item>`,
    });
    expect(page.root).toEqualHtml(`
      <task-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </task-item>
    `);
  });
});

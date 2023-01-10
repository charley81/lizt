import { newE2EPage } from '@stencil/core/testing';

describe('task-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<task-item></task-item>');

    const element = await page.find('task-item');
    expect(element).toHaveClass('hydrated');
  });
});

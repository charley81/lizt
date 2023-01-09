import { newE2EPage } from '@stencil/core/testing';

describe('list-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<list-section></list-section>');

    const element = await page.find('list-section');
    expect(element).toHaveClass('hydrated');
  });
});

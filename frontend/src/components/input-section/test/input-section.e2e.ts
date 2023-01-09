import { newE2EPage } from '@stencil/core/testing';

describe('input-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-section></input-section>');

    const element = await page.find('input-section');
    expect(element).toHaveClass('hydrated');
  });
});

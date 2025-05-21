import { newSpecPage } from '@stencil/core/testing';
import { TommyzkiButton } from '../tommyzki-button';

// describe('tommyzki-button', () => {
//   it('renders', async () => {
//     const page = await newSpecPage({
//       components: [TommyzkiButton],
//       html: `<tommyzki-button></tommyzki-button>`,
//     });
//     expect(page.root).toEqualHtml(`
//       <tommyzki-button>
//         <mock:shadow-root>
//           <slot></slot>
//         </mock:shadow-root>
//       </tommyzki-button>
//     `);
//   });
// });

describe('tommyzki-button', () => {
  it('renders with default label', async () => {
    const page = await newSpecPage({
      components: [TommyzkiButton],
      html: `<tommyzki-button></tommyzki-button>`,
    });
    expect(page.root).toEqualHtml(`
      <tommyzki-button>
        <mock:shadow-root>
          <button class="btn">Click Me</button>
        </mock:shadow-root>
      </tommyzki-button>
    `);
  });

  it('renders with custom label', async () => {
    const page = await newSpecPage({
      components: [TommyzkiButton],
      html: `<tommyzki-button label="Submit"></tommyzki-button>`,
    });
    expect(page.root.shadowRoot.querySelector('button')?.textContent).toBe('Submit');
  });
});

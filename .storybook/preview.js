/** @type { import('@storybook/html').Preview } */

const customViewports = {
  smallUgly: {
    name: 'smallUgly',
    styles: {
      height: '540px',
      width: '360px',
    },
  },
  mediumUgly: {
    name: 'mediumUgly',
    styles: {
      height: '1200px',
      width: '1024px',
    },
  },
}

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'someDefault',
    },
  },
}

export default preview

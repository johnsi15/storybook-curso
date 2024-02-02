import { withActions } from '@storybook/addon-actions/decorator'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/test'

import { createButton } from './Button'
import ButtonDoc from './ButtonDoc.mdx'
import { expect } from '@storybook/test'

export default {
  title: 'Design System/Atoms/Button',
  decorators: [
    story => {
      const decorator = document.createElement('div')
      decorator.style.margin = '24px'
      decorator.appendChild(story())

      return decorator
    },
    withActions,
  ],
  parameters: {
    docs: {
      page: null,
      description: {
        component: ButtonDoc,
      },
    },
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'blackfriday',
          value: '#000000',
        },
      ],
    },
  },
  argTypes: {
    label: {
      name: 'label',
      control: {
        type: 'text',
      },
    },
    style: {
      name: 'style',
      options: ['filled', 'outlined'],
      control: {
        type: 'select',
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onClick: {
      description: 'Event',
      action: 'clicked',
    },
  },
}

const Template = ({ label, ...args }) => createButton({ label, ...args })

export const Default = Template.bind({})

Default.args = {
  label: 'Button',
}

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)

  await userEvent.click(canvas.getByRole('button'))
  await expect(canvas.getByText('Button')).toBeInTheDocument()
}

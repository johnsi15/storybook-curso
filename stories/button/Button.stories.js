import { createButton } from './Button'
import ButtonDoc from './ButtonDoc.mdx'

export default {
  title: 'Design System/Atoms/Button',
  decorators: [
    story => {
      const decorator = document.createElement('div')
      decorator.style.margin = '24px'
      decorator.appendChild(story())

      return decorator
    },
  ],
  parameters: {
    docs: {
      page: null,
      description: {
        component: ButtonDoc,
      },
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
  },
}

const Template = ({ label, ...args }) => createButton({ label, ...args })

export const Default = Template.bind({})

Default.args = {
  label: 'Button',
}

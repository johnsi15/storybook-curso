import { createButton } from './Button'

export default {
  title: 'Design System/Atoms/Button',
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

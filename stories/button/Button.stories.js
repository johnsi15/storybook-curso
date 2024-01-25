import { createButton } from './Button'

export default {
  title: 'Design System/Atoms/Button',
}

const Template = ({ label, ...args }) => createButton({ label, ...args })

export const Default = Template.bind({})

Default.args = {
  label: 'Button',
}

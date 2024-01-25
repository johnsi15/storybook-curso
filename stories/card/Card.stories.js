import { createCard } from './Card'

export default {
  title: 'Design System/Atoms/Card',
}

const Template = ({ label, ...args }) => createCard({ label, ...args })

export const Default = Template.bind({})

Default.args = {
  title: 'Title',
  description: 'Description',
}

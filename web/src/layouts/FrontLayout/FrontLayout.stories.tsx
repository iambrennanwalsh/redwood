import type { ComponentMeta, ComponentStory } from '@storybook/react'

import FrontLayout from './FrontLayout'

export const generated: ComponentStory<typeof FrontLayout> = (args) => {
  return <FrontLayout {...args} />
}

export default {
  title: 'Layouts/FrontLayout',
  component: FrontLayout,
} as ComponentMeta<typeof FrontLayout>

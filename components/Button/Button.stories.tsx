import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'ラベル',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/i371U9UcMoOVAWAopGOXL4/chromatic-sample?type=design&node-id=1-4&mode=design&t=4sBydB0XtGqzrw2W-4',
    },
  },
}

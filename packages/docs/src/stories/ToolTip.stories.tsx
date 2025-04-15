import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, ToolTip, ToolTipProps } from '@ignite-ui/react'

export default {
  title: 'Form/ToolTip',
  component: ToolTip,
  tags: ['autodocs'],
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a Tooltip',
  },

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            padding: '$20',
            background: '$gray500',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToolTipProps>

export const Primary: StoryObj<ToolTipProps> = {}

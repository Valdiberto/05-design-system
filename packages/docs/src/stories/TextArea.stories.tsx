import type { Meta, StoryObj } from '@storybook/react'
import { Text, Box, TextArea, TextAreaProps } from '@vald6-ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations here',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}

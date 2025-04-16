import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@vald6-ignite-ui/react'
import { useEffect, useRef, useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const timeRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(false)
          window.clearTimeout(timeRef.current)
          timeRef.current = window.setTimeout(() => setIsOpen(true), 100)
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  tags: ['autodocs'],
  args: {
    title: 'Appointment made',
    description: 'Wednesday, October 23rd at 3:00 PM',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

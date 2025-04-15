import * as Tooltip from '@radix-ui/react-tooltip'
import { ToolTipArrow, ToolTipContent } from './styles'
import { ComponentProps, ReactNode } from 'react'

export interface ToolTipProps extends ComponentProps<typeof Tooltip.Root> {
  content: string | ReactNode
}

export function ToolTip({ content, children }: ToolTipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>

        <Tooltip.Portal>
          <ToolTipContent sideOffset={5}>
            <ToolTipArrow width={11} height={5} />
            {content}
          </ToolTipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

ToolTip.displayName = 'ToolTip'

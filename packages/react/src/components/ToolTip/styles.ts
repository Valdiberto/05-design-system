import { styled } from '../../styles'
import * as ToolTip from '@radix-ui/react-tooltip'

export const ToolTipContent = styled(ToolTip.Content, {
  background: '$gray900',
  padding: '$3 $4',
  color: '$gray100',
  borderRadius: '$xs',
  fontWeight: '$medium',
  fontSize: '$sm',
  fontFamily: '$default',
  filter: 'drop-shadow(4px 16px 24px rgba(0,0,0, 0.25))',
})

export const ToolTipArrow = styled(ToolTip.Arrow, {
  fill: '$gray900',
})

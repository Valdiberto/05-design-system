import { keyframes, styled } from '../../styles'
import * as ToastPrimitive from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 32

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(ToastPrimitive.Root, {
  padding: '$3 $5',
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  fontFamily: '$default',
  position: 'relative',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const ToastTitle = styled(ToastPrimitive.Title, {
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
  color: '$white',
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
  marginTop: '$1',
})

export const ToastClose = styled(ToastPrimitive.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  background: 'none',
  border: 'none',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: VIEWPORT_PADDING,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

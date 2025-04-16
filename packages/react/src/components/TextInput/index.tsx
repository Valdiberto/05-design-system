import { ComponentProps, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

type InputElement = React.ComponentRef<typeof Input>

export const TextInput = forwardRef<InputElement, TextInputProps>(({ prefix, ...props }: TextInputProps, ref) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </TextInputContainer>
  )
})

TextInput.displayName = 'TextInput'

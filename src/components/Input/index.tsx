/* eslint-disable react/display-name */
import theme from '@theme/index'
import { forwardRef, useState } from 'react'
import { TextInputProps, TextInput } from 'react-native'
import {
  Container,
  IconContainer,
  Input as InputStyle,
  UnvisibleIcon,
  VisibleIcon,
  Error,
} from './styles'

type InputProps = TextInputProps & {
  isPassword?: boolean
  passwordVisible?: (visible: boolean) => void
  error?: string
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ isPassword, passwordVisible = () => {}, error, ...rest }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    function handlePasswordVisible() {
      setIsPasswordVisible(!isPasswordVisible)
      passwordVisible(!isPasswordVisible)
    }

    return (
      <Container>
        <InputStyle
          ref={ref}
          isError={!!error}
          placeholderTextColor={theme.COLORS.GRAY_400}
          cursorColor={theme.COLORS.BLUE_LIGHT}
          {...rest}
        />
        {isPassword && (
          <IconContainer onPress={handlePasswordVisible}>
            {isPasswordVisible ? <UnvisibleIcon /> : <VisibleIcon />}
          </IconContainer>
        )}
        {error && <Error>{error}</Error>}
      </Container>
    )
  },
)

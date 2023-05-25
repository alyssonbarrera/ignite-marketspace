import React from 'react'
import { Container, Loading, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  title: string
  variant?: 'gray' | 'blue' | 'dark'
  isLoading?: boolean
}

export function Button({ title, variant, isLoading, ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.7} variant={variant} {...rest}>
      {isLoading ? <Loading /> : <Title variant={variant}>{title}</Title>}
    </Container>
  )
}

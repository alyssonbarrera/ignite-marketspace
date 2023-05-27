import React from 'react'
import { IconProps } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native'
import { Container, Loading, Title } from './styles'

type ButtonProps = TouchableOpacityProps & {
  title: string
  variant?: 'gray' | 'blue' | 'dark'
  isLoading?: boolean
  icon: React.ComponentElement<IconProps, any>
}

export function ButtonIcon({
  title,
  variant,
  icon,
  isLoading,
  ...rest
}: ButtonProps) {
  return (
    <Container activeOpacity={0.7} variant={variant} {...rest}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {icon}
          <Title variant={variant}>{title}</Title>
        </>
      )}
    </Container>
  )
}

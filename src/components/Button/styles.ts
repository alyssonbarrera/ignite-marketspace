import styled, { DefaultTheme } from 'styled-components/native'

type ButtonProps = {
  theme: DefaultTheme
  variant?: 'gray' | 'blue' | 'dark'
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  min-height: 42px;
  max-height: 42px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, variant }: ButtonProps) => {
    switch (variant) {
      case 'gray':
        return theme.COLORS.GRAY_500
      case 'blue':
        return theme.COLORS.BLUE_LIGHT
      case 'dark':
        return theme.COLORS.GRAY_100
      default:
        return theme.COLORS.GRAY_500
    }
  }};
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, variant }: ButtonProps) => {
    switch (variant) {
      case 'gray':
        return theme.COLORS.GRAY_200
      case 'blue':
        return theme.COLORS.GRAY_700
      case 'dark':
        return theme.COLORS.GRAY_700
      default:
        return theme.COLORS.GRAY_200
    }
  }};
`

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.BLUE,
  size: 'large',
}))``

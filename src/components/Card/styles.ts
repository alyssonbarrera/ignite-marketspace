import styled, { DefaultTheme } from 'styled-components/native'

type TagProps = {
  theme: DefaultTheme
  variant?: 'new' | 'used'
}

export const Container = styled.View`
  flex-shrink: 1;
  max-width: 168px;
`

export const Image = styled.Image`
  width: 100%;
  aspect-ratio: 1.8;
  border-radius: 6px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-top: 4px;
`

export const TagContainer = styled.View`
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background-color: ${({ theme, variant }: TagProps) => {
    switch (variant) {
      case 'new':
        return theme.COLORS.BLUE
      case 'used':
        return theme.COLORS.GRAY_200
      default:
        return theme.COLORS.GRAY_200
    }
  }};

  max-width: 70px;
  padding: 0px 8px;

  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 1;
`

export const Tag = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  text-transform: uppercase;
`

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`

export const Dollar = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Price = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

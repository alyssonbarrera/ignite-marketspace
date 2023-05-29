import styled, { DefaultTheme } from 'styled-components/native'

type IndicatorProps = {
  theme: DefaultTheme
  active: boolean
}

export const Container = styled.View`
  flex: 1;
  padding-bottom: 36px;
`

export const Header = styled.View`
  flex: 1;
  margin: 20px 24px 12px;
`

export const CarouselContainer = styled.View`
  flex: 1;
  position: relative;
`

export const IndicatorContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 2px;
`

export const Indicator = styled.View`
  flex: 1;
  height: 3px;
  border-radius: 3px;
  background-color: ${({ theme, active }: IndicatorProps) =>
    active ? 'rgba(247, 247, 248, 0.75)' : 'rgba(247, 247, 248, 0.5)'};
  margin: 0 4px;
`

export const Content = styled.View`
  flex: 1;
  padding: 22px 24px 0px;
`

export const ContentHeader = styled.View`
  flex: 1;
  margin-bottom: 26px;
`

export const User = styled.View`
  flex: 1;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`

export const AvatarContainer = styled.View`
  width: 24px;
  height: 24px;
  aspect-ratio: 1;
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
`

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
`

export const UserName = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const ContentBody = styled.View`
  flex: 1;
  margin-bottom: 26px;
`

export const TagContainer = styled.View`
  width: 43px;
  height: 17px;
  margin-bottom: 8px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Tag = styled.Text`
  font-size: 10px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  text-transform: uppercase;
`

export const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 8px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const PriceContainer = styled.View`
  flex: 1;
  gap: 4px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`

export const DollarSign = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};

  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 2px;
`

export const Price = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
`

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  line-height: 18.2px;
  margin-bottom: 24px;
`

export const InfoContainer = styled.View`
  flex: 1;
  gap: 16px;
`

export const AcceptTrade = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 8px;
`

export const AcceptTradePrimaryText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const AcceptTradeSecondaryText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const PaymentMethodsContainer = styled.View`
  flex: 1;
  gap: 8px;
`

export const PaymentMethodsTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const PaymentMethodsContent = styled.View`
  flex: 1;
  gap: 4px;
`

export const PaymentMethodContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const PaymentMethodText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px 15px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const PriceContainerFooter = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  gap: 4px;
`

export const DollarSignFooter = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLUE};

  margin-bottom: 3px;
`

export const PriceFooter = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLUE};
`

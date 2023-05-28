import { X } from 'phosphor-react-native'
import styled, { DefaultTheme } from 'styled-components/native'

type OptionProps = {
  theme: DefaultTheme
  variant?: 'selected' | 'unselected'
}

export const Content = styled.View`
  flex: 1;
  padding: 32px 24px;
  gap: 24px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`
export const ConditionContainer = styled.View`
  gap: 12px;
`

export const Condition = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const ConditionTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  gap: 7.5px;
  min-width: 76px;
  max-height: 28px;
  min-height: 28px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;
  padding: 0px 8px 0px 8px;

  background-color: ${({ theme, variant }: OptionProps) => {
    switch (variant) {
      case 'selected':
        return theme.COLORS.BLUE_LIGHT
      case 'unselected':
        return theme.COLORS.GRAY_500
      default:
        return theme.COLORS.GRAY_500
    }
  }};
`

export const OptionText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, variant }: OptionProps) => {
    switch (variant) {
      case 'selected':
        return theme.COLORS.GRAY_700
      case 'unselected':
        return theme.COLORS.GRAY_300
      default:
        return theme.COLORS.GRAY_300
    }
  }};

  text-transform: uppercase;
`

export const IconContainer = styled.View`
  width: 13px;
  height: 13px;
  border-radius: 13px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }: OptionProps) => theme.COLORS.GRAY_600};
`

export const Icon = styled(X).attrs({
  size: 10,
  color: '#647AC7',
  weight: 'bold',
})``

export const SwitchContainer = styled.View`
  gap: 12px;
  width: 100%;
`

export const SwitchTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Switch = styled.Switch`
  align-self: flex-start;
  margin: 0;
`

export const PaymentsContainer = styled.View`
  gap: 12px;
`

export const PaymentTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const PaymentsContent = styled.View`
  gap: 8px;
`

export const PaymentOptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 11px;
`

export const PaymentOption = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Footer = styled.View`
  flex: 1;
  margin-top: 65px;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`

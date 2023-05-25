import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const Content = styled.View`
  flex: 1;
  gap: 76px;
  padding: 65px 48px 68px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  text-align: center;
`

export const Form = styled.View`
  gap: 16px;
  justify-content: center;
  align-items: center;
`

export const FormFooter = styled.View`
  width: 100%;
  margin-top: 16px;
`

export const FormTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Footer = styled.View`
  flex: 1;
  min-height: 212px;
  width: 100%;
  padding: 0 48px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const FooterContent = styled.View`
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const FooterTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  text-align: center;
`

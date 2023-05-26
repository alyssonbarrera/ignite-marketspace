import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px 48px 40px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Header = styled.View`
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-bottom: 8px;
`

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  text-align: center;
`

export const Form = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  margin-top: 32px;
  gap: 16px;
`

export const FormFooter = styled.View`
  width: 100%;
  margin-top: 16px;
`

export const Footer = styled.View`
  flex: 1;
  gap: 16px;
  width: 100%;
  margin-top: 48px;
  align-items: center;
`

export const FooterTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

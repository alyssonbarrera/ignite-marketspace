import styled from 'styled-components/native'
import { Eye, EyeSlash } from 'phosphor-react-native'

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Input = styled.TextInput`
  width: 100%;
  min-height: 45px;
  max-height: 45px;

  padding: 12px 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
`

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  top: 12px;
`

export const VisibleIcon = styled(Eye)`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  top: -1px;
`

export const UnvisibleIcon = styled(EyeSlash)`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  top: -1px;
`

export const Error = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.RED_LIGHT};

  align-self: flex-start;
`

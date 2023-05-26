import styled from 'styled-components/native'
import { User, PencilSimpleLine } from 'phosphor-react-native'

export const Container = styled.View`
  border-radius: 88px;
  border: 3px solid ${({ theme }) => theme.COLORS.BLUE_LIGHT};
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  width: 88px;
  height: 88px;
  justify-content: center;
  align-items: center;
`
export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 88px;
  aspect-ratio: 1;
  object-fit: cover;
`

export const Placeholder = styled(User).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_400,
  size: 50,
}))``

export const ButtonIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  position: absolute;
  top: 48px;
  left: 56px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
`

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_600,
  size: 16,
}))``

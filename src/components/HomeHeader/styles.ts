import styled from 'styled-components/native'

export const Container = styled.View`
  gap: 8px;
  width: 100%;
  min-height: 45px;
  max-height: 45px;
  flex-direction: row;
`

export const User = styled.View`
  flex: 1;
  gap: 10px;
  flex-direction: row;
  align-items: center;
`

export const AvatarContainer = styled.View`
  width: 45px;
  height: 45px;
  aspect-ratio: 1;
  border-radius: 45px;
  border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
`

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
`

export const Info = styled.View`
  flex-direction: column;
`

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const ButtonContainer = styled.View`
  flex: 1;
  max-width: 170px;
`

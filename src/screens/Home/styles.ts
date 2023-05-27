import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 24px 72px;
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 32px;
`

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const AdsCard = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  padding: 12px 20px 12px 16px;
  margin-top: 12px;
  margin-bottom: 32px;

  min-height: 66px;
  max-height: 66px;

  background-color: rgba(54, 77, 157, 0.1);
  border-radius: 6px;
`

export const AdsCardInfo = styled.View`
  flex: 1;
  margin-left: 17px;
`

export const AdsCardNumber = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const AdsCardText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const AdsCardLink = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const AdsCardLinkText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLUE};
`

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 12px 16px;
  min-height: 45px;
  max-height: 45px;
  margin-top: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
`

export const Input = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-right: 12px;
`

export const InputIconsContainer = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60px;
`

export const InputIconsDivider = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const InputIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``

export const CardsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  margin-top: 24px;
`

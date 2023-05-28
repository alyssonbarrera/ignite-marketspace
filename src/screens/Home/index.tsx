import theme from '@theme/index'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  ArrowRight,
  MagnifyingGlass,
  Sliders,
  Tag,
} from 'phosphor-react-native'
import {
  AdsCard,
  AdsCardInfo,
  AdsCardLink,
  AdsCardLinkText,
  AdsCardNumber,
  AdsCardText,
  CardsContainer,
  Container,
  Content,
  Input,
  InputContainer,
  InputIcon,
  InputIconsContainer,
  InputIconsDivider,
  Text,
} from './styles'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { Card } from '@components/Card'
import { HomeHeader } from '@components/HomeHeader'
import { useFilter } from '@hooks/useFilter'

export function Home() {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const { handleModal } = useFilter()

  const [search, setSearch] = useState<string>('')

  function handleSearch() {
    console.log(search)
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: insets.top,
      }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Container>
        <HomeHeader />
        <Content>
          <Text>Seus produtos anunciados para venda </Text>
          <AdsCard>
            <Tag size={22} color={theme.COLORS.BLUE} />
            <AdsCardInfo>
              <AdsCardNumber>4</AdsCardNumber>
              <AdsCardText>anúncios ativos</AdsCardText>
            </AdsCardInfo>
            <AdsCardLink onPress={() => navigation.navigate('myads')}>
              <AdsCardLinkText>Meus anúncios</AdsCardLinkText>
              <ArrowRight size={16} color={theme.COLORS.BLUE} />
            </AdsCardLink>
          </AdsCard>

          <Text>Compre produtos variados</Text>
          <InputContainer>
            <Input
              value={search}
              onChangeText={setSearch}
              placeholder="Buscar anúncio"
              placeholderTextColor={theme.COLORS.GRAY_400}
              cursorColor={theme.COLORS.BLUE_LIGHT}
            />
            <InputIconsContainer>
              <InputIcon onPress={handleSearch}>
                <MagnifyingGlass size={20} color={theme.COLORS.GRAY_200} />
              </InputIcon>
              <InputIconsDivider />
              <InputIcon onPress={() => handleModal(true)}>
                <Sliders size={20} color={theme.COLORS.GRAY_200} />
              </InputIcon>
            </InputIconsContainer>
          </InputContainer>

          <CardsContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardsContainer>
        </Content>
      </Container>
    </ScrollView>
  )
}

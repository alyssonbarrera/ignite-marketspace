import { useState } from 'react'
import {
  AcceptTrade,
  AcceptTradePrimaryText,
  AcceptTradeSecondaryText,
  Avatar,
  AvatarContainer,
  CarouselContainer,
  Content,
  ContentBody,
  Footer,
  ContentHeader,
  Description,
  DollarSign,
  DollarSignFooter,
  Header,
  Indicator,
  IndicatorContainer,
  InfoContainer,
  PaymentMethodContainer,
  PaymentMethodText,
  PaymentMethodsContainer,
  PaymentMethodsContent,
  PaymentMethodsTitle,
  Price,
  PriceContainer,
  PriceContainerFooter,
  PriceFooter,
  Tag,
  TagContainer,
  Title,
  TitleContainer,
  User,
  UserName,
  Container,
} from './styles'
import {
  ArrowLeft,
  Bank,
  Barcode,
  CreditCard,
  Money,
  QrCode,
  WhatsappLogo,
} from 'phosphor-react-native'
import { Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import AvatarPlaceholder from '@assets/AvatarPlaceholder.png'
import { ButtonIcon } from '@components/ButtonIcon'
import theme from '@theme/index'
import { useNavigation } from '@react-navigation/native'

export function AdDetails() {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const width = Dimensions.get('window').width
  const [activeIndex, setActiveIndex] = useState(0)

  const carouselData = [
    {
      id: 1,
      image:
        'https://nlwspacetime.s3.amazonaws.com/memories/b7ec63d3-20f1-4427-beb6-50f66142d2d1.png',
    },
    {
      id: 2,
      image:
        'https://nlwspacetime.s3.amazonaws.com/memories/b7ec63d3-20f1-4427-beb6-50f66142d2d1.png',
    },
    {
      id: 3,
      image:
        'https://nlwspacetime.s3.amazonaws.com/memories/b7ec63d3-20f1-4427-beb6-50f66142d2d1.png',
    },
  ]
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: 72,
      }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Container>
        <Header>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft size={24} />
          </TouchableOpacity>
        </Header>
        <CarouselContainer>
          <Carousel
            width={width}
            height={280}
            data={carouselData}
            onSnapToItem={(index) => setActiveIndex(index)}
            renderItem={({ item }) => (
              <Image
                style={{ width: '100%', height: '100%' }}
                source={{ uri: item.image }}
                alt="Imagem do produto"
              />
            )}
          />

          <IndicatorContainer>
            {carouselData.map((item, index) => (
              <Indicator key={item.id} active={index === activeIndex} />
            ))}
          </IndicatorContainer>
        </CarouselContainer>
        <Content>
          <ContentHeader>
            <User>
              <AvatarContainer>
                <Avatar source={AvatarPlaceholder} />
              </AvatarContainer>
              <UserName>John Doe</UserName>
            </User>
          </ContentHeader>

          <ContentBody>
            <TagContainer>
              <Tag>Novo</Tag>
            </TagContainer>

            <TitleContainer>
              <Title>Bicicleta</Title>
              <PriceContainer>
                <DollarSign>R$</DollarSign>
                <Price>59,90</Price>
              </PriceContainer>
            </TitleContainer>

            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium animi, ullam quidem aperiam provident nobis
              voluptatibus quam accusamus eligendi illo? Vitae qui animi
              consectetur quam corrupti. Unde possimus vero velit.
            </Description>

            <InfoContainer>
              <AcceptTrade>
                <AcceptTradePrimaryText>Aceita trocas?</AcceptTradePrimaryText>

                <AcceptTradeSecondaryText>Sim</AcceptTradeSecondaryText>
              </AcceptTrade>

              <PaymentMethodsContainer>
                <PaymentMethodsTitle>Meios de pagamento:</PaymentMethodsTitle>

                <PaymentMethodsContent>
                  <PaymentMethodContainer>
                    <Barcode size={18} />
                    <PaymentMethodText>Boleto</PaymentMethodText>
                  </PaymentMethodContainer>
                  <PaymentMethodContainer>
                    <QrCode size={18} />
                    <PaymentMethodText>Pix</PaymentMethodText>
                  </PaymentMethodContainer>
                  <PaymentMethodContainer>
                    <Money size={18} />
                    <PaymentMethodText>Dinheiro</PaymentMethodText>
                  </PaymentMethodContainer>
                  <PaymentMethodContainer>
                    <CreditCard size={18} />
                    <PaymentMethodText>Cartão de crédito</PaymentMethodText>
                  </PaymentMethodContainer>
                  <PaymentMethodContainer>
                    <Bank size={18} />
                    <PaymentMethodText>Depósito bancário</PaymentMethodText>
                  </PaymentMethodContainer>
                </PaymentMethodsContent>
              </PaymentMethodsContainer>
            </InfoContainer>
          </ContentBody>
        </Content>
        <Footer>
          <PriceContainerFooter>
            <DollarSignFooter>R$</DollarSignFooter>
            <PriceFooter>59,90</PriceFooter>
          </PriceContainerFooter>

          <ButtonIcon
            title="Entrar em contato"
            variant="blue"
            icon={<WhatsappLogo size={13} color={theme.COLORS.GRAY_700} />}
          />
        </Footer>
      </Container>
    </ScrollView>
  )
}

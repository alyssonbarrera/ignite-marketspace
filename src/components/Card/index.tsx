import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  Dollar,
  Image,
  Price,
  PriceContainer,
  Tag,
  TagContainer,
  Title,
} from './styles'

type CardProps = TouchableOpacityProps

export function Card({ ...rest }: CardProps) {
  return (
    <Container {...rest}>
      <TagContainer variant="new">
        <Tag>Novo</Tag>
      </TagContainer>
      <Image
        source={{
          uri: 'https://nlwspacetime.s3.amazonaws.com/memories/b7ec63d3-20f1-4427-beb6-50f66142d2d1.png',
        }}
        alt="Imagem do produto"
      />
      <Title>Tênis Vermelho</Title>
      <PriceContainer>
        <Dollar>R$</Dollar>
        <Price>59,90</Price>
      </PriceContainer>
    </Container>
  )
}

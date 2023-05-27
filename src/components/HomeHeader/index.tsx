import {
  Avatar,
  AvatarContainer,
  ButtonContainer,
  Container,
  Info,
  Name,
  Text,
  User,
} from './styles'
import { Plus } from 'phosphor-react-native'

import { ButtonIcon } from '@components/ButtonIcon'
import AvatarPlaceholder from '@assets/AvatarPlaceholder.png'

export function HomeHeader() {
  return (
    <Container>
      <User>
        <AvatarContainer>
          <Avatar source={AvatarPlaceholder} />
        </AvatarContainer>
        <Info>
          <Text>Boas vindas,</Text>
          <Name>John Doe!</Name>
        </Info>
      </User>
      <ButtonContainer>
        <ButtonIcon
          title="Criar anúncio"
          icon={<Plus color="#FFFFFF" size={16} />}
          variant="dark"
        />
      </ButtonContainer>
    </Container>
  )
}

import { Avatar, ButtonIcon, Container, EditIcon, Placeholder } from './styles'

type UserPhotoProps = {
  onPress?: () => void
  preview?: string | undefined
}

export function UserPhoto({ onPress, preview }: UserPhotoProps) {
  return (
    <Container>
      {preview ? (
        <Avatar
          source={{ uri: preview }}
          alt="Avatar preview"
          resizeMode="cover"
        />
      ) : (
        <Placeholder />
      )}
      <ButtonIcon onPress={onPress}>
        <EditIcon />
      </ButtonIcon>
    </Container>
  )
}

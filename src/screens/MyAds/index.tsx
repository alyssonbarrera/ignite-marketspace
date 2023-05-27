import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Container } from './styles'
import { ScrollView, Text } from 'react-native'

export function MyAds() {
  const insets = useSafeAreaInsets()
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: insets.top,
      }}
    >
      <Container>
        <Text>MyAds</Text>
      </Container>
    </ScrollView>
  )
}

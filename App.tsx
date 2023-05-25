import theme from '@theme/index'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Loading } from '@components/Loading'

import { Routes } from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider
        style={{
          flex: 1,
          backgroundColor: theme.COLORS.GRAY_600,
        }}
      >
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

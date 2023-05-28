import { GestureHandlerRootView } from 'react-native-gesture-handler'

import theme from '@theme/index'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Loading } from '@components/Loading'

import { Routes } from '@routes/index'
import { AuthContextProvider } from '@contexts/AuthContext'
import { FilterContextProvider } from '@contexts/FilterContext'

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider
        style={{
          flex: 1,
          backgroundColor: theme.COLORS.GRAY_600,
        }}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="dark" backgroundColor={theme.COLORS.GRAY_600} />
          <AuthContextProvider>
            <FilterContextProvider>
              {!fontsLoaded ? <Loading /> : <Routes />}
            </FilterContextProvider>
          </AuthContextProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

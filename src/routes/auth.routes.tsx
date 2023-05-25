import theme from '@theme/index'
import { SignIn } from '@screens/SignIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="signin"
        component={SignIn}
        options={{
          statusBarColor: theme.COLORS.GRAY_600,
        }}
      />
    </Navigator>
  )
}

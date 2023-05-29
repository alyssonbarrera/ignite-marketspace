import theme from '@theme/index'
import { TouchableOpacity } from 'react-native'
import { House, SignOut, Tag } from 'phosphor-react-native'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

import { Home } from '@screens/Home'
import { MyAds } from '@screens/MyAds'
import { AdDetails } from '@screens/AdDetails'

type AppRoutesProps = {
  home: undefined
  myads: undefined
  addetails: {
    id: string
  }
  signout: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>()

export function AppRoutes() {
  const { COLORS } = theme

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.GRAY_200,
        tabBarInactiveTintColor: COLORS.GRAY_400,
        tabBarStyle: {
          backgroundColor: COLORS.GRAY_700,
          borderTopWidth: 0,
          height: 72,
          shadowColor: COLORS.GRAY_700,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: COLORS.GRAY_600,
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <House
              size={24}
              color={color}
              weight={focused ? 'bold' : 'regular'}
            />
          ),
        }}
      />

      <Screen
        name="myads"
        component={MyAds}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Tag
              size={24}
              color={color}
              weight={focused ? 'bold' : 'regular'}
            />
          ),
        }}
      />

      <Screen
        name="addetails"
        component={AdDetails}
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarItemStyle: {
            display: 'none',
          },
        }}
      />

      <Screen
        name="signout"
        component={SignOut}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.7}
            >
              <SignOut size={24} color={COLORS.RED_LIGHT} />
            </TouchableOpacity>
          ),
        }}
        listeners={({ navigation }) => {
          return {
            tabPress: (e) => {
              e.preventDefault()
              console.log('signout')
              // navigation.navigate('signin')
            },
          }
        }}
      />
    </Navigator>
  )
}

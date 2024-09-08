import { NavigationContainer } from '@react-navigation/native'
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack'
import LaunchScreen from './screens/LaunchScreen'

const Stack = createNativeStackNavigator()

export function StackNavigator() {
  const options: NativeStackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
    orientation: 'portrait',
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Launch'>
        <Stack.Screen name='Launch' component={LaunchScreen} options={{ ...options, animation: 'default' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

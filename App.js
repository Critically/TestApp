import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './src/utils/navigation'
import FirstScreen from './src/components/FirstScreen'
import SecondScreen from './src/components/SecondScreen'
import { useDispatch } from 'react-redux'
import { ApiGetDataList } from './src/api/query'

const Stack = createNativeStackNavigator()

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ApiGetDataList())
  })

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="First" component={FirstScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="Second" component={SecondScreen} options={{ animation: 'slide_from_right' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Welcome, AuthMain } from './screens'
import Walkthrough from './screens/Walkthrough/Walkthrough'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Welcome'}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

// import { Text, View } from 'react-native'
// import React, { Component } from 'react'
// import Walkthrough from './screens/Walkthrough/Walkthrough'

// export class App extends Component {
//   render() {
//     return (
//       <View>
//         <Walkthrough />
//       </View>
//     )
//   }
// }

// export default App

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/bottomtabs/Home'
import Report from '../screens/bottomtabs/Report'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function MainTab (){
  return(
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#fff176',
      tabBarInactiveTintColor: '#e0f7fa',
      tabBarStyle:{
        backgroundColor:'teal',
        height: 56,
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        fontSize:20,
      },
      tabBarLabelStyle: {
        fontSize: 14,
      }
    }}
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel: 'หน้าหลัก',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="home" size={24} color={color} />
          }
        }}
       />
      <Tab.Screen name="Report" component={Report} 
        options={{
          tabBarLabel: 'รายงาน',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="stats" size={24} color={color} />
          }
        }}
       />
    </Tab.Navigator>
  )
}

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  )
}

export default RootStack
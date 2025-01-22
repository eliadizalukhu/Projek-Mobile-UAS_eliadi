import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/TabScreen/Home';
import Profile from '../Screens/TabScreen/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <>
              <Ionicons
                name={iconName ?? 'default-icon'}
                size={size}
                color={color}
              />
              <Text>{route.name === 'Home' ? 'Home' : 'Profile'}</Text>
            </>
          );
        },
        tabBarActiveTintColor: 'tomato', // Warna tab aktif
        tabBarInactiveTintColor: 'gray', // Warna tab tidak aktif
        tabBarLabel: () => null, // Hilangkan label tab
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

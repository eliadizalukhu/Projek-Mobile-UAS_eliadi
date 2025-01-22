import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home'; // Ensure this path is correct
import Detail from './Screens/Detail'; // Ensure this path is correct
import Detail2 from './Screens/Detail2'; // Ensure this path is correct
import Search from './Screens/Search';   // Ensure this path is correct
import Login from './Screens/Login';   // Ensure this path is correct

// Define stack navigation params
export type StackParamList = {
  Login: undefined;
  Home: undefined;
  Detail: undefined; // Parameter for Detail page
  Detail2: undefined;
  Search: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Toko Salad Buah Sukabumi' }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: 'Detail Salad' }}
        />
        <Stack.Screen
          name="Detail2"
          component={Detail2}
          options={{ title: 'Detail promo' }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: 'pencarian' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
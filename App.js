import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';


import Settings from './src/screens/Settings';
import Main from './src/screens/Main';
import ProductDetail from './src/screens/ProductDetail';
import store from './src/redux/store';
import Cart from './src/screens/Cart';


const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}>

          </Stack.Screen>
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{ headerShown: false }}>

          </Stack.Screen>
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}>

          </Stack.Screen>


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


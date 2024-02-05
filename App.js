import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './components/redux/store';
import MyDrawer from './components/MyDrawer';
import CartD from './CartD';
import Settings from './src/screens/Settings';
import Main from './src/screens/Main';
import Home from './components/Home';


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
          {/* <Stack.Screen name="Homef" options={{ headerShown: false }}>
            {() => (
              <MyDrawer />
            )}
          </Stack.Screen> */}
          {/* <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}>

          </Stack.Screen> */}


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


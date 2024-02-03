import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './components/Home';
import About from './components/About';
import ContactPage from './components/Contact';
import Login from './components/Login';


const Drawer = createDrawerNavigator();
const TabNavigator = createBottomTabNavigator();

// Define your Tab Navigator
const MyTabs = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={
        {
          // tabBarLabelPosition: "beside-icon",
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'purple'

        }
      }
    >
      <TabNavigator.Screen
        name="My Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <Ionicons name='home' size={32} color={color} />

        }}
      />

      <TabNavigator.Screen
        name="About Us"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => <Ionicons name='information-circle' size={32} color={color} />

        }}
      />
      <TabNavigator.Screen
        name="Contact Us"
        component={ContactPage}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => <Ionicons name='information-circle' size={32} color={color} />

        }}
      />
    </TabNavigator.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={MyTabs}
          options={{
            title: "My Home",
            drawerLabel: "Dr home",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef"
            }
          }}
        />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={ContactPage} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import MyTabs from "../../components/MyTab";
import AboutUsPage from "../../components/About";
import ContactPage from "../../components/Contact";
import Login from "../../components/Login";
import HomeScreen from "./HomeScreen";
const Drawer = createDrawerNavigator();
const Main = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      >

      </Drawer.Screen>
      {/* <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={{
          title: "My Home",
          drawerLabel: "Home",
          drawerActiveTintColor: "#333",
          drawerActiveBackgroundColor: "silver",
          drawerContentStyle: {
            backgroundColor: "#c6cbef",
          },
        }}
      />
      <Drawer.Screen name="About" component={AboutUsPage} />
      <Drawer.Screen name="Contact" component={ContactPage} />
      <Drawer.Screen name="Login" component={Login} /> */}
    </Drawer.Navigator>
  );
};

export default Main;

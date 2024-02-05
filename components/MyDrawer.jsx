import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTabs from "./MyTab";
import AboutUsPage from "./About";
import ContactPage from "./Contact";
import Login from "./Login";
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
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
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;

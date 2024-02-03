import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import About from "./About";
import React from "react";

const Tab = createBottomTabNavigator();

const TabC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export default TabC;

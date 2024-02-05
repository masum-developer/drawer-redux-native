import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import AboutUsPage from "./About";
import ContactPage from "./Contact";
import Ionicons from "@expo/vector-icons/Ionicons";
const MyTabs = () => {
  const TabNavigator = createBottomTabNavigator();
  return (
    <TabNavigator.Navigator
      screenOptions={{
        // tabBarLabelPosition: "beside-icon",
        tabBarShowLabel: true,
        tabBarActiveTintColor: "purple",
      }}
    >
      <TabNavigator.Screen
        name="My Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={32} color={color} />
          ),
        }}
      />

      <TabNavigator.Screen
        name="About Us"
        component={AboutUsPage}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" size={32} color={color} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Contact Us"
        component={ContactPage}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" size={32} color={color} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};
export default MyTabs;

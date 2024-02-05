import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../common/Header";
import Home from "./tabs/Home";
import Search from "./tabs/Search";
import WishList from "./tabs/WishList";
import Notification from "./tabs/Notification";
import User from "./tabs/User";

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <WishList />
      ) : selectedTab == 3 ? (
        <Notification />
      ) : (
        <User />
      )}
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(0);
          }}
          style={styles.bottomTab}
        >
          <Image
            style={styles.bottomTabIcon}
            source={
              selectedTab == 0
                ? require("../images/home_fill.png")
                : require("../images/home.png")
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            style={styles.bottomTabIcon}
            source={require("../images/search.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(2);
          }}
        >
          <Image
            style={styles.bottomTabIcon}
            source={require("../images/wishlist.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(3);
          }}
        >
          <Image
            style={styles.bottomTabIcon}
            source={require("../images/notification.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(4);
          }}
        >
          <Image
            style={styles.bottomTabIcon}
            source={require("../images/user.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bottomTab: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
});

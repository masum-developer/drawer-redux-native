import React from "react";
const { height, width } = Dimensions.get("window");
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn}>
        <Image style={styles.icon} source={leftIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <Image style={styles.icon} source={rightIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    width: width,
    height: 65,
    // position: "absolute",
    // top: 0,
    backgroundColor: "#0786DAFD",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
});

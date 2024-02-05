import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../common/Header";

const Home = ({ notification }) => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require("../../images/menu.png")}
        rightIcon={require("../../images/bag.png")}
        title={"All Essential BD"}
      />
      <Text>Home Masum</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

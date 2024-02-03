import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Product({ productName }) {
  return (
    <View style={styles.box}>
      <Text style={{ textAlign: "center" }}>{productName}</Text>
    </View>
  );
}

export default Product;

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 50,
    padding: 10,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
  },
});

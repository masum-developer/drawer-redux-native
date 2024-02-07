import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../common/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomButton from "../common/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/actions/Action";

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const cart = useSelector(state => state.cartReducer);
  
  const dispatch = useDispatch();

  const onAddTocart = (item) =>{
    dispatch(addItemToCart(item))
  }

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require("../images/arrow.png")}
        rightIcon={require("../images/bag.png")}
        title="Product Detail"
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
    <ScrollView>
    <Image source={{ uri: route.params.data.image }} style={styles.banner} />
      <Text style={styles.title}>{route.params.data.title}</Text>
      <Text style={styles.des}>{route.params.data.description}</Text>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text style={[styles.price, { color: "#000" }]}>{"Price:"}</Text>
        <Text style={styles.price}>{"$" + route.params.data.price}</Text>
      </View>
      <TouchableOpacity style={styles.wishListBtn}>
        <Image style={styles.icon} source={require("../images/wishlist.png")} />
      </TouchableOpacity>
      <CustomButton onClick ={() => onAddTocart(route.params.data)} bg={'orange'} title={'Add To Cart'} color={'#fff'}/>
    </ScrollView>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    width: "100%",
    height: 300,
    resizeMode: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 23,

    fontWeight: "600",
    marginLeft: 20,
    marginTop: 20,
  },
  des: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  price: {
    color: "green",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    fontWeight: "800",
  },
  wishListBtn: {
    position: "absolute",
    right: 20,
    top: 100,
    backgroundColor: "#E2DFDF",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

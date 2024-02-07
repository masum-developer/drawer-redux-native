import React, { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addItemToCart, removeItemFromCart } from '../redux/actions/Action';

const Cart = () => {
    const cartData = useSelector(state => state.cartReducer)
    const dispatch = useDispatch();
    //  console.log('masum',items)
    // const [cartItems,setCartItems] = useState(items)
     const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <Header leftIcon={require("../images/menu.png")} onClickLeftIcon={() => {
          navigation.navigate('HomeScreen');
        }} title="Cart Items" />
            <FlatList
                data={cartData}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={styles.productItem} key={item.id}
                            activeOpacity={1}


                        >
                            <Image source={{ uri: item.image }} style={styles.itemImage} />
                            <View>
                                <Text style={styles.name}>
                                    {item.title.length > 25
                                        ? item.title.substring(0, 25) + "..."
                                        : item.title}
                                </Text>
                                <View style={styles.qtyview}>
                                    <Text style={styles.price}>{'$' + item.price}</Text>
                                    <TouchableOpacity onPress={()=>dispatch(removeItemFromCart(item))} style={styles.btn}>
                                        <Text style={{fontSize:18,fontWeight:'600'}}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.qty}></Text>
                                    <TouchableOpacity onPress={()=>dispatch(addItemToCart(item))} style={styles.btn}>
                                        <Text style={{fontSize:18,fontWeight:'600'}}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />


        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productItem: {
        width: Dimensions.get("window").width,
        height: 100,
        marginTop: 10,
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "row",
    },
    itemImage: {
        width: 100,
        height: 100,
    },
    name: {
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 20,
    },
    desc: {
        marginLeft: 20,
    },
    price: {
        color: "green",
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 20,
        marginTop: 5,
    },
    qtyview: {
        flexDirection: 'row',
        alignItems:'center',
        marginTop:10,
    },
    btn:{
        padding:5,
        width:30,
        borderWidth:0.5,
        borderRadius:10,
        marginLeft:10,
    },
    qty:{
        marginLeft:10,
        fontSize:18
    }
});

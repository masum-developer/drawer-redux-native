import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';

export default function Header() {

   

    const cartData = useSelector((state)=>state.reducer)
    const [cartItems, setCartItems] = useState(0)
    //console.warn(cartData)
    useEffect(()=>{
        setCartItems(cartData.length)
    },[cartData])
 
    const goToCart = () => {
       
      
    };

    return (
        <View >
             <TouchableOpacity onPress={goToCart}>
                <Text style={{ fontSize: 25, textAlign: 'right', paddingHorizontal: 20, backgroundColor: 'lightblue', paddingVertical: 5 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ marginLeft: 10 }}>{cartItems}</Text>
                        <AntDesign name="shoppingcart" size={24} color="black" />
                    </View>
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
       
    }
})


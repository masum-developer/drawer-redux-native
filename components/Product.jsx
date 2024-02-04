import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, Touchable, View } from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from "./redux/action";

const Product=(props) =>{
  const item =props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.reducer)
  console.log(cartItems)

  const [isAdded, setIsAdded] = useState(false)

  useEffect(()=>{

    let result = cartItems.filter((element)=>{
      return element.name === item.name
    });

    if(result.legth){
      setIsAdded(true)
    } else{
      setIsAdded(false)
    }
  },[cartItems])

  const handleAddToCart =(item)=>{

    dispatch(addToCart(item))

  }
  const handleRemoveFromCart = (item) =>{
    //console.warn(item);
    dispatch(removeFromCart(item.name))
  }




  return (
    <View  style={{backgroundColor:'white', marginVertical:20, alignItems:'center', borderBottomColor:'orange',borderBottomWidth:2, padding:10}}>
    <Text style={{fontSize:24}}>{item.name}</Text>
    <Text style={{fontSize:24}}>{item.price}</Text>
    <Text style={{fontSize:24}}>{item.color}</Text>
    <Image style={{width:100,height:100, marginBottom:20}} source = {{uri:item.image}}/>
    {/* {
      isAdded ? <Button title="Remove From Cart" onPress={()=>handleRemoveFromCart(item)}/> : <Button title="Add To Cart" onPress={()=>handleAddToCart(item)}/>
    } */}
    <Button title="Remove From Cart" onPress={()=>handleRemoveFromCart(item)}/>
  
    <Button title="Add To Cart" onPress={()=>handleAddToCart(item)}/>
    
  </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default Product;

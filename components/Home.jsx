import React from "react";
import { Button, Image, ScrollView, StatusBar, Text, View } from "react-native";
import Header from "./Header";
import ProductCategory from "./ProductCategory";
import Product from "./Product";

export default function Home() {
  const products= [
    {
      id:1,
      name:'Samsung Mobile',
      color:'Golden',
      price:20000,
      image:'https://i.ibb.co/kBJt8Dn/pexels-tracy-le-blanc-607812.jpg'
    },
    {
      id:2,
      name:'IPhone Mobile',
      color:'Black',
      price:30000,
      image:'https://i.ibb.co/dcpQMQ7/pexels-pixabay-248526.jpg'
    },
    {
      id:3,
      name:'Realme Mobile',
      color:'White',
      price:3000,
      image:'https://i.ibb.co/25kHL5y/pexels-jess-bailey-designs-788946.jpg'
    }
  ]
  return (
    <View style={{flex:1}}>
        <Header/>
        <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
    
      <View style={{ padding: 20 }}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            margin: 20,
            fontSize: 25,
          }}
        >
          Welcome to All Essential Bd
        </Text>
        <Text style={{ textAlign: "justify", color: "white" }}>
        
          Discover a world of convenience at your fingertips with our extensive
          range of daily needs products. At All Essential BD, we understand the
          importance of having easy access to essential items that make your
          everyday life smoother and more enjoyable.
        </Text>
        <Image
          style={{ width: "100%", paddingVertical: 50, marginTop: 20 }}
          source={require("../assets/images/dailyneed.jpeg")}
        />
        <View style={{backgroundColor:'white'}}>
          
        {
          products.map((item)=><Product key={item.id} item={item}/>)
        }
        </View>
        <Text
          style={{
            color: "white",
            marginTop: 20,
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Our Product Crieteria
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "lightblue",
            padding: 30,
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <ProductCategory productName="Daily Needs" />
          <ProductCategory productName="Home Appliance" />
          <ProductCategory productName="Furniture" />
        </View>
        <Text
          style={{ textAlign: "justify", marginVertical: 20, color: "white" }}
        >
          One-Stop Shop for Daily Needs! Discover a world of convenience at your
          fingertips with our extensive range of daily needs products. At All
          Essential BD, we understand the importance of having easy access to
          essential items that make your everyday life smoother and more
          enjoyable. Explore our diverse collection of daily essentials,
          carefully curated to meet your household requirements. From fresh
          groceries to household cleaning supplies, we've got you covered. Say
          goodbye to the hassle of multiple trips to the store and embrace the
          simplicity of online shopping. Why choose All Essential BD for your
          daily needs? 1. Wide Variety: Our platform offers a wide variety of
          daily essentials, ensuring that you find everything you need in one
          place. 2. Quality Assurance: We prioritize quality, bringing you
          products from trusted brands to ensure the well-being of you and your
          family. 3. Convenient Delivery: Enjoy the convenience of doorstep
          delivery. Simply place your order, and we'll ensure it reaches you in
          a timely manner. 4. User-Friendly Experience: Our user-friendly
          interface makes browsing and shopping a breeze. Find what you need
          quickly and effortlessly. Shop with confidence at All Essential BD,
          where your daily needs are our top priority. Experience the ease of
          online shopping and elevate your lifestyle with quality products that
          make a difference. --- Feel free to customize the text to better fit
          the specifics of your ecommerce platform and the products you offer.
        </Text>
      </View>
    </ScrollView>
    </View>
  );
}

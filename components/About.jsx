import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const AboutUsPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
      />

      <Text style={styles.title}>About Us</Text>

      <Text style={styles.description}>
        Welcome to our app! We are dedicated to serve daily needs. Our team is
        passionate about delivering high-quality products to our users.
      </Text>

      <Text style={styles.highlight}>Our Values:</Text>
      <Text style={styles.values}>- Customer Satisfaction</Text>
      <Text style={styles.values}>- Innovation and Excellence</Text>
      <Text style={styles.values}>- Integrity and Transparency</Text>

      <Text style={styles.contactInfo}>
        Contact Us: allessentialbd@gmail.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  highlight: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  values: {
    marginLeft: 20,
  },
  contactInfo: {
    marginTop: 20,
    fontStyle: "italic",
  },
});

export default AboutUsPage;

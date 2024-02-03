import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ContactPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Your Name" />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.messageInput}
          placeholder="Your Message"
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactInfo}>
        <Text style={styles.contactText}>Contact Information</Text>
        <Text>Email: allessentialbd@gmail.com</Text>
        <Text>Phone: +88 01719440550</Text>
        <Text>Address: 91, B.C.C. Road, Wari</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  messageInput: {
    height: 80,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  contactInfo: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  contactText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ContactPage;

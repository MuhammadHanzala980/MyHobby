import React from "react";
import { Text, View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Button, Logo } from "../../Components/index";

const GetStart = ({ navigation }) => {
  return (
    <View style={styles.button}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => navigation.navigate("SignIn")} buttonText={"Student Sign Up"} />
          <Text style={styles.text}>or</Text>
          <Button buttonText={"Become a Tutor"} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#15A89B",
    paddingTop: StatusBar.currentHeight,
  },
  buttonContainer: {
    height: hp("20%"),
    paddingHorizontal: wp("8%"),
  },
  logoContainer: {
    height: hp("70%"),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    paddingVertical: wp("1%"),
  },
});

export default GetStart;

import React from "react";
import { View, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Button, AppLogo, BgColorInput, ContryCodePicker } from "../../Components/index";

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <AppLogo />
        </View>
        <View style={styles.whiteBGContainer}>
          <View style={styles.tabContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")} activeOpacity={0.3} style={styles.signInTabButton}>
              <Text style={[styles.simpleText, { color: "#15A89B", fontWeight: "bold" }]}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.tabSaprater} />
            <TouchableOpacity activeOpacity={1} style={styles.signupTabButton}>
              <Text style={[styles.simpleText, { color: "#fff", fontWeight: "bold" }]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.helloText}>Hello!</Text>
            <Text style={styles.accountText}>Create an account and continue</Text>
          </View>
          <View style={styles.inpuContainer}>
            <BgColorInput placeholder={"User Name"} />
          </View>
          <View style={styles.inpuContainer}>
            <BgColorInput placeholder={"Email"} />
          </View>
          <View style={styles.inpuContainer}>
            <ContryCodePicker />
          </View>

          <View style={{ marginTop: hp("4%"), paddingHorizontal: wp("5%") }}>
            <Button onPress={() => navigation.navigate("Home")} textColor="#fff" bgColor="#FC3480" buttonText="Sign In" />
          </View>
          <TouchableOpacity style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", marginTop: hp("2%") }} activeOpacity={0.5}>
            <Text style={[styles.simpleText, { color: "#A1ABBF" }]}>You don't have an accont? </Text>
            <Text style={[styles.simpleText, { color: "#15A89B" }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15A89B",
    paddingTop: StatusBar.currentHeight,
  },
  accountText: {
    fontSize: 14,
    textAlign: "center",
    color: "#A1ABBF",
  },

  helloText: {
    fontSize: 24,
    textAlign: "center",
  },

  simpleText: {
    fontSize: 13,
  },

  logoContainer: {
    height: hp("30%"),
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"red",
    // paddingTop: hp("0%")
  },
  signupTabButton: {
    height: hp("5%"),
    width: wp("30%"),
    backgroundColor: "#15A89B",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  tabSaprater: {
    height: hp("4%"),
    width: 1.5,
    backgroundColor: "#C9C9C9",
  },
  signInTabButton: {
    height: hp("5%"),
    width: wp("30%"),
    // marginLeft:wp("5%"),
    backgroundColor: "#F4F5F7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  whiteBGContainer: {
    backgroundColor: "#fff",
    height: hp("70%"),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  tabContainer: {
    height: hp("10%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("10%"),
    marginTop: hp("2%"),
  },
  inpuContainer: {
    paddingHorizontal: wp("5%"),
    marginTop: hp("3%"),
  },
});

export default Signup;

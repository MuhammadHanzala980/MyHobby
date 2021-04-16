import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Button, IconButton, AppLogo, TextInput } from "../../Components/index";
import twitter from "../../assets/socialIcons/Icon-logo-twitter.png";
import google from "../../assets/socialIcons/google.png";
import facebook from "../../assets/socialIcons/facebook.png";
import passEye from "../../assets/icons/Icons-Line-checkmark-circle.png";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signInStudent } from "../../store/action";

const SignIn = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [pass, setPass] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <AppLogo />
        </View>
        <View style={styles.feildesContainer}>
          <View>
            <TextInput onChangeText={(e) => e} placeholder="Email or Phone Number" />
          </View>
          <View style={{ marginTop: hp("2%") }}>
            <TextInput onChangeText={(e) => e} placeholder={"Password"} rightIcon={passEye} />
          </View>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={[styles.simpleText, { color: "#15A89B", fontWeight: "bold" }]}>Forget Password</Text>
          </TouchableOpacity>
          <View style={{ marginTop: hp("4%") }}>
            <Button onPress={() => navigation.navigate("Signup")} textColor="#fff" bgColor="#FC3480" buttonText="Sign In" />
          </View>
        </View>

        <View style={{ marginTop: hp("5%"), paddingHorizontal: wp("5%") }}>
          <View>
            <IconButton textColor={"#A1ABBF"} buttonText="Continue with Twitter" icon={twitter} />
          </View>
          <View style={{ marginTop: hp("3%") }}>
            <IconButton textColor={"#A1ABBF"} buttonText="Continue with Google" icon={google} />
          </View>
          <View style={{ marginTop: hp("3%") }}>
            <IconButton textColor={"#A1ABBF"} buttonText="Continue with Facebook" icon={facebook} />
          </View>
        </View>
        <TouchableOpacity style={{ flexDirection: "row", alignSelf: "center", alignItems: "center" }} activeOpacity={0.5}>
          <Text style={[styles.simpleText, { color: "#A1ABBF" }]}>You don't have an accont? </Text>
          <Text style={[styles.simpleText, { color: "#15A89B" }]}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },

  logoContainer: {
    height: hp("25%"),
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"red",
    paddingTop: hp("4%"),
  },
  simpleText: {
    alignSelf: "flex-end",
    fontSize: 12,
    marginTop: hp("1.5%"),
    // color: "#15A89B",
    // fontWeight: "bold"
  },
  feildesContainer: {
    // height: hp("20%"),
    paddingHorizontal: wp("5%"),
    // backgroundColor:"red"
  },
});

const mapDispatchToProps = (dispatchEvent) => {
    return {
      actions: bindActionCreators(
        {
          signInStudent,
        },
        dispatchEvent
      ),
    };
  };
  const mapStateToProps = (state) => {
    return {
      item: state,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Signin);
  


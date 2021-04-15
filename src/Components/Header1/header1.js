import React from "react";
import { View, StyleSheet, Image } from "react-native";
import logo from "../../assets/logo/logo.jpeg";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Header1 = () => {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("4%"),
  },

  logo: {
    width: 140,
    height: 44,
  },
});

export default Header1;

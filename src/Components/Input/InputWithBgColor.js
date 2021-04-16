import React from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const INPUTCOLOR = "#A1ABBF";

const BgColorInput = ({ onChange, value, placeholder, rightIcon }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput onChangeText={onChange} value={value} placeholder={placeholder} placeholderTextColor={INPUTCOLOR} style={styles.textInput} />
      <View style={{ height: "100%", justifyContent: "center", paddingHorizontal: 10 }}>
        <Image source={rightIcon} style={{ height: 15, width: 20 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#F4F5F7",
    height: hp("7.5%"),
    flexDirection: "row",
    borderRadius: 10,
  },

  textInput: {
    color: INPUTCOLOR,
    paddingHorizontal: 10,
    fontSize: 14,
    flex: 1,
  },
});

export default BgColorInput;

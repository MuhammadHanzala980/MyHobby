import React from "react";
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import search from "../../assets/Images/search.png";
const INPUTCOLOR = "#A1ABBF";

const SearchBox = ({ onChange, value, placeholder }) => {
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity>
        <View style={{ height: "100%", justifyContent: "center", paddingHorizontal: 10 }}>
          <Image source={search} style={{ height: 20, width: 20 }} />
        </View>
      </TouchableOpacity>
      <TextInput onChangeText={onChange} value={value} placeholder={placeholder} placeholderTextColor={INPUTCOLOR} style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#fff",
    height: hp("6.5%"),
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius: 10,
  },

  textInput: {
    color: INPUTCOLOR,
    paddingHorizontal: 10,
    fontSize: 13,
    flex: 1,
  },
});

export default SearchBox;

import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Card = ({ text, image , icon}) => {
  return (
    <View style={styles.cardBox}>
      <TouchableOpacity style={styles.cardConatant}>
        <View style={styles.imgContainer}>
          <Image style={styles.cardImg} source={image} />
        </View>
        <View style={styles.locationBoxd}>
          <Image style={styles.locationIcon} source={icon} />
          <Text style={styles.locationText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    height: 206,
    width: wp("50%"),
    paddingHorizontal: wp("3%"),
    marginBottom: wp('6%')
  },
  cardConatant: {
    borderWidth: 0.5,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 10,
  },
  imgContainer: {
    borderRadius: 10,
    height: 149,
    width: 149,
  },

  cardImg: {
    height: "100%",
    borderRadius: 10,
  },

  locationBoxd: {
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    paddingHorizontal: wp("2%"),
  },
  locationText: {
    fontSize: 18,
    color: "black",
  },
  locationIcon: {
    height: 24,
    width: 24,
    marginRight: 5,
  },
});

export default Card;

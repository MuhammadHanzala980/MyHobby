import React from "react";
import { View, StyleSheet, ScrollView, StatusBar, Text, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import cardImage from "../../assets/Images/cardimg.png";
import cardImage2 from "../../assets/Images/cardimg2.png";
import location from "../../assets/Images/location.png";
import { SearchBox, Card, Header1 } from "../../Components/index";

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header1 />
        </View>
        <View style={styles.searchBox}>
          <Text style={{ textAlign: "center", fontSize: 22, color: "#fff", paddingVertical: hp("2%") }}>NEAR WEMBLEY</Text>
          <Text style={styles.label}>Tutors Near You</Text>
          <SearchBox value={"Find a tutor"} />
        </View>
        <View style={styles.sliderContainer}></View>
        <View>
          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.heading}>Explore Nearby</Text>
            </View>
            <View style={styles.card}>
              <Card text={"London"} image={cardImage} icon={location} />
              <Card text={"Karachi"} image={cardImage2} icon={location} />
              <Card text={"London"} image={cardImage} icon={location} />
              <Card text={"London"} image={cardImage} icon={location} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },

  sliderContainer: {
    height: hp("35%"),
    backgroundColor: "gray",
  },
  cardContainer: {
    // borderWidth: 2,
  },

  heading: {
    paddingHorizontal: wp("3%"),
    paddingVertical: wp("5%"),
    fontSize: 22,
    color: "#000000",
  },

  card: {
    // height: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  searchBox: {
    backgroundColor: "#15A89B",
    paddingHorizontal: wp("5%"),
    paddingBottom: wp("6%"),
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    position: "relative",
    top: hp('1.5%'),
    zIndex: 1
  },

  label: {
    color: "#fff",
    fontSize: 16,
    paddingBottom: hp("1"),
  },
});

export default Home;

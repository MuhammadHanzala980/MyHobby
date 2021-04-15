import React from 'react';
import { View, StyleSheet, ScrollView,StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Logo } from "../../Components/index";


const GetStart = ({navigation}) => {
    return (
        <View style={styles.button}>
            <ScrollView>
                <View style={styles.logoContainer} >
                    <Logo />
                </View>
                <View style={styles.buttonContainer} >
                    <Button onPress={()=>navigation.navigate("SignIn")} buttonText={"Lets Get Started"} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: "#15A89B",
        paddingTop:StatusBar.currentHeight
    },
    buttonContainer: {
        height: hp("20%"),
        paddingHorizontal: wp('8%')
    },
    logoContainer: {
        height: hp("80%"),
        justifyContent: "center",
        alignItems: "center"
    }

});

export default GetStart;

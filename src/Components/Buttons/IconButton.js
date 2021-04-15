import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';



const Button = ({ onPress, buttonText, textColor, bgColor, icon }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} activeOpacity={0.7} onPress={onPress} style={[styles.button,
        { backgroundColor: bgColor || "#fff", }]}>
            <Image resizeMode={"contain"} source={icon} />
            <Text style={[styles.buttonTitle, { color: textColor || "#434343" }]} >{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        height: hp("7%"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    buttonTitle: {
        fontWeight: "bold",
        // fontSize: 14,
        color: "#434343",
        marginLeft: wp("7%")

    }
});

export default Button;

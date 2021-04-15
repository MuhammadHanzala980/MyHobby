import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Button = ({ onPress, buttonText, textColor, bgColor, icon }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={[styles.button,
        { backgroundColor: bgColor || "#fff", }]}>
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
    },
    buttonTitle: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#434343"
    }
});

export default Button;

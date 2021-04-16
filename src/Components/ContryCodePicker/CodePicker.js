import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import CountryPicker from "react-native-region-country-picker";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

let countryPickerRef = undefined;


const INPUTCOLOR = "#A1ABBF"

const BgColorInput = ({ onChange, value, placeholder, rightIcon }) => {
    return (
        <View style={styles.inputContainer} >
            <View style={{
                height: "100%", justifyContent: "center", paddingHorizontal: wp("3%"),
                borderRightWidth: 1, borderRightColor: "#15A89B", 
                justifyContent:"center",alignItems:"center"
            }} >
                <CountryPicker
                    countryPickerRef={(ref) => {
                        countryPickerRef = ref;
                    }}
                    enable={true}
                    darkMode={false}
                    countryCode={"PK"}
                    containerConfig={{
                        showFlag: true,
                        showCallingCode: true,
                        showCountryName: false,
                        showCountryCode: false,
                    }}
                    modalConfig={{
                        showFlag: true,
                        showCallingCode: true,
                        showCountryName: false,
                        showCountryCode: true,
                    }}
                    onSelectCountry={(data) => {
                        console.log("DATA", data);
                    }}
                    onInit={(data) => {
                        console.log("DATA", data);
                    }}
                    onOpen={() => {
                        // onOpen();
                    }}
                    onClose={() => {
                        console.log("Close");
                    }}
                    containerStyle={{
                        container: {},
                        flagStyle: {},
                        callingCodeStyle: {},
                        countryCodeStyle: {},
                        countryNameStyle: {},
                    }}
                    modalStyle={{
                        container: {},
                        searchStyle: {},
                        tileStyle: {},
                        itemStyle: {
                            itemContainer: {},
                            flagStyle: {},
                            countryCodeStyle: {},
                            countryNameStyle: {},
                            callingNameStyle: {},
                        },
                    }}
                    title={"Country"}
                    searchPlaceholder={"Search"}
                    showCloseButton={true}
                    showModalTitle={true}
                />

            </View>
            <TextInput
                onChangeText={onChange}
                value='' placeholder={placeholder}
                placeholderTextColor={INPUTCOLOR}
                style={styles.textInput} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#F4F5F7",
        height: hp("7.5%"),
        flexDirection: "row",
        borderRadius: 10
    },

    textInput: {
        color: INPUTCOLOR,
        paddingHorizontal: 10,
        fontSize: 14,
        flex: 1,
    }

});

export default BgColorInput;













// import * as React from 'react';
// import { Button, View, StatusBar, SafeAreaView } from 'react-native';
// import CountryPicker from "react-native-region-country-picker";

// let countryPickerRef = undefined;



// export default function Countrys() {
//     return (
//         <View style={{  backgroundColor: "green", justifyContent: "center", }} >

//             <View style={{ height: 50, backgroundColor: "red", marginHorizontal: 20, justifyContent: "center", paddingHorizontal: 20 }} >
//              {/* <Button title={"Country"} onPress={() => onOpen()} /> */}

//                 <CountryPicker
//                     countryPickerRef={(ref) => {
//                         countryPickerRef = ref;
//                     }}
//                     enable={true}
//                     darkMode={false}
//                     countryCode={"PK"}
//                     containerConfig={{
//                         showFlag: true,
//                         showCallingCode: true,
//                         showCountryName: false,
//                         showCountryCode: false,
//                     }}
//                     modalConfig={{
//                         showFlag: true,
//                         showCallingCode: true,
//                         showCountryName: false,
//                         showCountryCode: true,
//                     }}
//                     onSelectCountry={(data) => {
//                         console.log("DATA", data);
//                     }}
//                     onInit={(data) => {
//                         console.log("DATA", data);
//                     }}
//                     onOpen={() => {
//                         // onOpen();
//                     }}
//                     onClose={() => {
//                         console.log("Close");
//                     }}
//                     containerStyle={{
//                         container: {},
//                         flagStyle: {},
//                         callingCodeStyle: {},
//                         countryCodeStyle: {},
//                         countryNameStyle: {},
//                     }}
//                     modalStyle={{
//                         container: {},
//                         searchStyle: {},
//                         tileStyle: {},
//                         itemStyle: {
//                             itemContainer: {},
//                             flagStyle: {},
//                             countryCodeStyle: {},
//                             countryNameStyle: {},
//                             callingNameStyle: {},
//                         },
//                     }}
//                     title={"Country"}
//                     searchPlaceholder={"Search"}
//                     showCloseButton={true}
//                     showModalTitle={true}
//                 />
//             </View>


//         </View>
//     );
// }

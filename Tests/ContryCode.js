// import React, { useEffect, useCallback, } from 'react';
// import {
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
// } from 'react-native';
// import { GetStart } from "./src";
// import { createStackNavigator } from '@react-navigation/stack';


// const Stack = createStackNavigator();


// const App = () => {

//   useEffect(
//     useCallback(() => {
//       StatusBar.setBarStyle("dark-content");
//       Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
//       StatusBar.setTranslucent(true);
//     }, []),
//   );


//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="GetStart" component={GetStart} />
//     </Stack.Navigator>

//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#fff"
//   }

// });

// export default App;










import * as React from 'react';
import { Button, View, StatusBar, SafeAreaView } from 'react-native';
import CountryPicker from "react-native-region-country-picker";

let countryPickerRef = undefined;



export default function Countrys() {
    const onOpen = () => {
        countryPickerRef.open();
        // countryPickerRef.close();
    }
    return (
        <View style={{ flex: 1, backgroundColor: "green", justifyContent: "center", }} >
            <View style={{ height: 50, backgroundColor: "#fff", marginHorizontal: 20, justifyContent: "center", paddingHorizontal: 20 }} >

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

            <Button title={"Country"} onPress={() => onOpen()} />

        </View>
    );
}

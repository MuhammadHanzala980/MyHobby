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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStart, SignIn ,Signup, Home} from "./src";



const Stack = createStackNavigator();
const options = { headerShown: false, headerTitle: null }

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name="GetStart" component={GetStart} />
      <Stack.Screen options={options} name="SignIn" component={SignIn} />
      <Stack.Screen options={options} name="Signup" component={Signup} />
      <Stack.Screen options={options} name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  React.useEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
      Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }, []),
  );

  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}

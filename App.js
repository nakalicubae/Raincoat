import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./screens/SignUp";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUp' screenOptions = {{ headerShown: false }}>
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

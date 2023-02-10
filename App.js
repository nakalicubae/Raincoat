import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./screens/Start";
import SignUp from "./screens/SignUp";
import Write from "./screens/Write";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start' screenOptions = {{ headerShown: false }}>
        <Stack.Screen name='Start' component={Start} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Write' component={Write} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

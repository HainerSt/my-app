import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
    if (!fontsLoaded && error) return null;
  }, [fontsLoaded, error]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Text>Homeee</Text>
    </Stack>
  );
};

export default RootLayout;

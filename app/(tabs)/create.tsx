import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Create = () => {
  return (
    <View>
      <Text>Create</Text>
      <Link href="/" style={{ color: "blue" }}>
        Go To Home
      </Link>
    </View>
  );
};

export default Create;

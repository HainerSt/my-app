import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";
import { Restart } from "fiction-expo-restart";

const TabIcon = ({ icons, color, name, focused }) => {
  return (
    <View>
      <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" />
      <Text>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

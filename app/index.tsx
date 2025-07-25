import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Mirza Mahmud Hossan!
      </Text>
      <View></View>
      <Text className="text-3xl font-normal text-gray-400">Mobile App Developer</Text>

      {/* Route Navigation */}
      <Link href={"./onboard"}>Onboard</Link>
    </View>
  );
}
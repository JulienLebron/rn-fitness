import { Link } from "expo-router";
import { View, Text } from "@/components/general/Themed";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", gap: 10 }}>
      <Link href="/workout/current">
        <Text>Resume Current Workout</Text>
      </Link>
      <Link href="/workout/123">
        <Text>Open with id 123</Text>
      </Link>
      <Text>Home Screen</Text>
    </View>
  );
}

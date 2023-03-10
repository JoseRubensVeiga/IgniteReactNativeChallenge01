import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./src/components/Header";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={{ flex: 1, backgroundColor: "#191919" }}>
        <Header />
      </View>
    </>
  );
}

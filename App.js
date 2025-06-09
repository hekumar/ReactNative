import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Image,
  Button
} from "react-native";
import Car from "./components/Car";

export default function App() {
  const localImage = require("./assets/react.png");
  const onPressLearnMore = () => {
    console.log("onPressLearnMore  ..........");
  };
  return (
    <View style={styles.container}>
      <Car />
      <Text
        onPress={() => {
          Alert.alert("Text Pressed.");
        }}
        style={{ color: "blue" }}
      >
        <Text style={{ color: "green" }}>Open up App.js</Text> to start working
        on your app!
      </Text>
      <Text>Open up App.js to start working on your app!</Text>

      <Button
        style={{
          ...styles.btn_style
        }}
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  btn_style: {
    borderEndStartRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: "#876876"
  }
});

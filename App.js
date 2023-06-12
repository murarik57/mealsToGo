import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>Search</Text>
      </View>
      <View style={styles.list}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "olive",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});

import React from 'react'

import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          sohmhere!!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteText: {
  color: '#FFFFFF',
  },
  darkText: {
  color: '#000000',
}
  },

);

export default App;
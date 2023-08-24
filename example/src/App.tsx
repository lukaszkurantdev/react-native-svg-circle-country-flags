import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Languages, Al } from 'react-native-svg-circle-country-flags';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result</Text>
      <Languages.Ak />
      <Al />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

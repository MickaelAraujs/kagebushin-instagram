import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import Feed from './src/components/Feed';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
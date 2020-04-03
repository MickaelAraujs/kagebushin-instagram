import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import Feed from './src/components/Feed';
import Menu from './src/components/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Feed />
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
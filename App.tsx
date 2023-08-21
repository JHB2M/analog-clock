import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedClock } from './src/components';

const App = () => {
  return (
    <LinearGradient colors={['#40e0d0', '#0074d9', '#2a00b9']} style={styles.linearGradient}>
      <AnimatedClock/>
  </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});

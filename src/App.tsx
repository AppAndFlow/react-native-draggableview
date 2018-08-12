import * as React from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);

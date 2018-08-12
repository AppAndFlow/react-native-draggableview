import * as React from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, View, Dimensions } from 'react-native';

import DraggaleView from './DraggableView';

export default class App extends React.Component {
  render() {
    return (
      <DraggaleView
        style={styles.container}
        backgroundComponent={<View style={styles.view} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: 'red',
  },
});

registerRootComponent(App);

import * as React from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

import DraggaleView from './DraggableView';

export default class App extends React.Component {
  render() {
    return (
      <DraggaleView
        style={styles.container}
        backgroundComponent={<View style={styles.view} />}
        offset={85}
        threshold={300}
        direction="up"
      >
        <View style={styles.innerView}>
          <Text>Drag me up!!</Text>
        </View>
      </DraggaleView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginBottom: 35,
  },
  view: {
    flex: 1,
    backgroundColor: 'red',
  },
  innerView: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

registerRootComponent(App);

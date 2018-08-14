import * as React from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, View, Text } from 'react-native';

import DraggaleView from './DraggableView';

export default class App extends React.Component {
  render() {
    return (
      <DraggaleView
        style={styles.container}
        backgroundComponent={<View style={styles.view} />}
        offset={40}
        direction="down"
        threshold={300}
      >
        <View style={styles.innerView}>
          <Text>Drag me down!!</Text>
        </View>
      </DraggaleView>
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
  innerView: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
});

registerRootComponent(App);

# react-native-draggableView

![Alt Text](https://cdn.discordapp.com/attachments/172177937594843136/478293517924433920/ex2.gif)

![Alt Text](https://cdn.discordapp.com/attachments/172177937594843136/478293504930611200/ex1.gif)

## Installation

Installation can be done through `npm` or `yarn`:

- This lib uses [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler). If you are using [Expo](https://expo.io/) it is included by default, otherwise you will need to install it.

```shell
npm i react-native-draggableView --save
```

```shell
yarn add react-native-draggableView
```

## Basic Usage

```js
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import DraggaleView from 'react-native-draggableView';

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
```

## API

### Props

| **Prop**              | **Type**    | **Description**                                                                                                                     |
| --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `style`               | `ViewStyle` | Styles of DraggableView.                                                                                                            |
| `children`            | `Component` | The component to render on the DraggableView.                                                                                       |
| `backgroundComponent` | `Component` | The component to render behind the DraggableView.                                                                                   |
| `offset`              | `number`    | If you want to give to DraggableView an offset once it's fully dragged. This offset will be positioned based on the drag direction. |
| `direction`           | `string`    | Can be either "up" or "down". This determines the drag direction. Default is "down".                                                |
| `threshold`           | `number`    | The minimum drag distance required to trigger the drag animation.                                                                   |

### Methods WIP, might change.

Use `ref` to access these methods.

| **Method**     | **Parameter** | **Description**                              |
| -------------- | ------------- | -------------------------------------------- |
| `moveToNormal` | `void`        | Moves DraggableView to it's default position |
| `moveToBottom` | `void`        | Moves DraggableView to it's bottom position  |
| `moveToTop`    | `void`        | Moves DraggableView to it's top position     |

## Examples

### .1

![Alt Text](https://cdn.discordapp.com/attachments/172177937594843136/478293517924433920/ex2.gif)

```js
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DraggaleView from 'react-native-draggableView';

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
```

### .2

![Alt Text](https://cdn.discordapp.com/attachments/172177937594843136/478295647070715904/ex3.gif)

```js
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import DraggaleView from 'react-native-draggableView';

export default class App extends React.Component {
  render() {
    return (
      <DraggaleView
        style={styles.container}
        backgroundComponent={<View style={styles.view} />}
        offset={40}
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
```

## License

MIT.

# react-native-draggableView

## Installation

Installation can be done through `npm` or `yarn`:

- This lib uses [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler). If you are using Expo it is included by default, otherwise you will need to install it.

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

## License

MIT.

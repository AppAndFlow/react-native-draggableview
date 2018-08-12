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

All the `ScrollView`/`ListView`/`FlatList` props will be passed.

| **Prop**                    | **Type**                         | **Description**                                                                                |
| --------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------- |
| `innerRef`                  | `Function`                       | Catch the reference of the component.                                                          |
| `viewIsInsideTabBar`        | `boolean`                        | Adds an extra offset that represents the `TabBarIOS` height.                                   |
| `resetScrollToCoords`       | `Object: {x: number, y: number}` | Coordinates that will be used to reset the scroll when the keyboard hides.                     |
| `enableAutomaticScroll`     | `boolean`                        | When focus in `TextInput` will scroll the position, default is enabled.                        |
| `extraHeight`               | `number`                         | Adds an extra offset when focusing the `TextInput`s.                                           |
| `extraScrollHeight`         | `number`                         | Adds an extra offset to the keyboard. Useful if you want to stick elements above the keyboard. |
| `enableResetScrollToCoords` | `boolean`                        | Lets the user enable or disable automatic resetScrollToCoords.                                 |
| `keyboardOpeningTime`       | `number`                         | Sets the delay time before scrolling to new position, default is 250                           |
| `enableOnAndroid`           | `boolean`                        | Enable Android Support                                                                         |

### Methods

Use `innerRef` to get the component reference and use `this.scrollRef.props` to access these methods.

| **Method**           | **Parameter**                                                                                                                                           | **Description**                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `getScrollResponder` | `void`                                                                                                                                                  | Get `ScrollResponder`                                          |
| `scrollToPosition`   | `x: number, y: number, animated: bool = true`                                                                                                           | Scroll to specific position with or without animation.         |
| `scrollToEnd`        | `animated?: bool = true`                                                                                                                                | Scroll to end with or without animation.                       |
| `scrollIntoView`     | `element: React.Element<*>, options: { getScrollPosition: ?(parentLayout, childLayout, contentOffset) => { x: number, y: number, animated: boolean } }` | Scrolls an element inside a KeyboardAwareScrollView into view. |

## License

MIT.

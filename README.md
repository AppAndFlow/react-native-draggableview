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

## Usage

You can use the `KeyboardAwareScrollView`, the `KeyboardAwareListView`, `KeyboardAwareSectionList` or the `KeyboardAwareFlatList`
components. They accept `ScrollView`, `ListView`, `SectionList` and `FlatList` default props respectively and
implement a custom high order componente called `KeyboardAwareHOC` to handle keyboard appearance.
The high order component is also available if you want to use it in any other component.

Import `react-native-keyboard-aware-scroll-view` and wrap your content inside
it:

```js
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
```

```jsx
<KeyboardAwareScrollView>
  <View>
    <TextInput />
  </View>
</KeyboardAwareScrollView>
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

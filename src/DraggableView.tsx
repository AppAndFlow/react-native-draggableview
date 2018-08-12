import * as React from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
  View,
  ViewStyle,
} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Touchable from '@appandflow/touchable';

const UP = 'up';
// const DOWN = 'down';

interface P {
  backgroundComponent?: React.ReactNode;
  style?: ViewStyle;
  direction?: 'up' | 'down';
  threshold?: number;
  offset?: number;
}

interface S {
  isDragged: boolean;
}

class AVADraggableView extends React.Component<P, S> {
  _translateY: any;
  _translateYY: any;
  _lastOffset: any;
  _onGestureEvent: any;
  state = {
    isDragged: false,
  };
  constructor(props: P) {
    super(props);
    this._translateY = new Animated.Value(0);
    this._translateYY = new Animated.Value(0);
    this._lastOffset = { x: 0, y: 0 };
    this._onGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationY: this._translateYY,
          },
        },
      ],
      { useNativeDriver: true },
    );
  }

  _onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastOffset.y += event.nativeEvent.translationY;

      this._translateY.setOffset(this._lastOffset.y);
      this._translateY.setValue(0);

      if (event.nativeEvent.velocityY < -1000 && this.props.direction === UP) {
        this.moveToTop();
      } else if (event.nativeEvent.velocityY < -1000) {
        this.moveToBottom();
      } else {
        this._maybeMove();
      }
    }
  };

  _maybeMove = () => {
    let threshold = 200;

    if (this.props.threshold) {
      threshold = this.props.threshold;
    }

    if (this.props.direction === UP) {
      threshold = threshold * -1;
    }

    if (this.props.direction === UP) {
      if (this._lastOffset.y < threshold) {
        this.moveToTop();
        this._translateY.setOffset(this._lastOffset.y);
        this._translateY.setValue(0);
      } else {
        this._translateY.setOffset(0);
        this._translateY.setValue(0);
        setTimeout(this.moveToNormal, 10);
      }
    } else {
      if (this._lastOffset.y < threshold) {
        this._translateY.setOffset(0);
        this._translateY.setValue(0);
        setTimeout(this.moveToNormal, 10);
      } else {
        this.moveToBottom();
        this._translateY.setOffset(this._lastOffset.y);
        this._translateY.setValue(0);
      }
    }
  };

  moveToTop = () => {
    const offset = this.props.offset || 0;

    Animated.spring(this._translateYY, {
      toValue: -Dimensions.get('window').height + offset,
      useNativeDriver: true,
      tension: 10,
    }).start();
    this._translateY.setOffset(0);
    this._translateY.setValue(0);
    this._lastOffset.y = Dimensions.get('window').height;
    this.setState({ isDragged: true });
  };

  moveToBottom = () => {
    const offset = this.props.offset || 0;

    Animated.spring(this._translateYY, {
      toValue: Dimensions.get('window').height - offset,
      useNativeDriver: true,
      tension: 10,
    }).start();
    this._translateY.setOffset(this._lastOffset.y);
    this._translateY.setValue(0);
    this._lastOffset.y = Dimensions.get('window').height;
    this.setState({ isDragged: true });
  };

  moveToNormal = () => {
    Animated.spring(this._translateYY, {
      toValue: 0,
      useNativeDriver: true,
      tension: 10,
    }).start();
    this._translateY.setOffset(0);
    this._translateY.setValue(0);
    this._lastOffset.y = 0;
    this.setState({ isDragged: false });
  };

  render() {
    const { style } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.backgroundStuff}>
          {this.props.backgroundComponent || <View style={{ flex: 1 }} />}
        </View>
        <PanGestureHandler
          onGestureEvent={this._onGestureEvent}
          onHandlerStateChange={this._onHandlerStateChange}
          minOffsetY={this.props.direction === UP ? -10 : 10}
          minOffsetX={10000000000}
        >
          <Animated.View
            style={[
              styles.fill,
              style,
              {
                transform: [{ translateY: this._translateYY }],
              },
            ]}
          >
            {this.props.children}
          </Animated.View>
        </PanGestureHandler>
        {this.state.isDragged ? (
          <Touchable
            feedback="none"
            hitSlop={{ top: 50, bottom: 50 }}
            style={
              this.props.direction === UP
                ? {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    width: Dimensions.get('window').width,
                    height: this.props.offset + 10,
                  }
                : {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: Dimensions.get('window').width,
                    height: this.props.offset + 10,
                  }
            }
            onPress={this.state.isDragged ? this.moveToNormal : null}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    shadowColor: '#303030',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 1,
  },
  backgroundStuff: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});

export default AVADraggableView;

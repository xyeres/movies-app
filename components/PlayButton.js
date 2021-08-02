import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../theme/Colors';
class PlayButton extends React.PureComponent {
  render() {
    const { handlePress } = this.props;
    return (
      <Pressable onPress={() => handlePress()} style={styles.button}>
        <Text style={styles.buttonText}>Play</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 120,
    width: 60,
    height: 60,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.white,
  },
});

export default PlayButton;

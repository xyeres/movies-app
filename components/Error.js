import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const propTypes = {
  errorText1: PropTypes.string,
  errorText2: PropTypes.string,
};

const defaultProps = {
  errorText1: 'Oop! Something went wrong.',
  errorText2: 'Make sure you are online and restart the app.',
};

class Error extends React.PureComponent {
  render() {
    const { errorText1, errorText2 } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{errorText1}</Text>
        <Text style={styles.text}>{errorText2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

Error.defaultProps = defaultProps;
Error.propTypes = propTypes;
export default Error;

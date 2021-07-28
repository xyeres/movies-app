import React from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';

const propTypes = {
  content: PropTypes.array,
  title: PropTypes.string,
};

class List extends React.PureComponent {
  render() {
    const { title, content, navigation } = this.props;
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            horizontal={true}
            renderItem={({ item }) => (
              <Card navigation={navigation} item={item} />
            )}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

List.propTypes = propTypes;
export default List;

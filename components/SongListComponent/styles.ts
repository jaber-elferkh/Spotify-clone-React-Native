import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    height: 50,
    width: 50,
  },
  rightContainer: {
    marginLeft: 15,
    // justifyContent: 'space-around',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginBottom: 3,
  },
  artist: {
    color: 'grey',
    fontSize: 13,
  },
});
export default styles;

import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 48,
    width: '100%',
    backgroundColor: '#202020',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    // margin: 10,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  image: {
    height: 60,
    width: 60,
    marginRight: 10,
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginRight: 15,
  },
  namesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 70,
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 15,
  },
  artist: {
    color: 'grey',
    fontSize: 12,
    marginLeft: 10,
  },
});
export default styles;

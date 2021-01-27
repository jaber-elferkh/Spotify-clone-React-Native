import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Album } from '../../types';
import styles from './styles';

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = ({ album }: AlbumProps) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate('AlbumScreen', { id: album.id });
  };

  return (
    <TouchableWithoutFeedback onPress={pressHandler}>
      <View style={styles.container}>
        <Image source={{ uri: album.imageUri }} style={styles.image} />
        <Text style={styles.text}>{album.artistHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumComponent;

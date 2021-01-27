import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Album } from '../../types';
import AlbumComponent from '../AlbumComponent';
import styles from './styles';

export type AlbumCategoryProps = {
  title: string;
  albums: [Album];
};

const AlbumCategory = ({ title, albums }: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      {/* Title of the Category */}
      <Text style={styles.title}>{title}</Text>

      {/* List of Albums */}
      <FlatList
        data={albums}
        renderItem={({ item }) => <AlbumComponent album={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default AlbumCategory;

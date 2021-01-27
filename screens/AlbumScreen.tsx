import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AlbumHeader from '../components/AlbumHeader';
import SongListComponent from '../components/SongListComponent';
import albumScreen from '../data/albumScreenData';

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    return console.log(route);
  }, []);

  return (
    <View>
      <FlatList
        data={albumScreen.songs}
        renderItem={({ item }) => <SongListComponent song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumScreen} />}
      />
    </View>
  );
};

export default AlbumScreen;

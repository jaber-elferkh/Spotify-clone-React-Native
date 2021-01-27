import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const song = {
  id: '1',
  title: 'Song Number 1',
  artist: 'Jaber El-Ferkh',
  imageUri:
    'https://images.unsplash.com/flagged/photo-1576364259198-c778cdc3e7ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.namesContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={25} color="white" />
          <FontAwesome name="play" size={25} color="white" />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;

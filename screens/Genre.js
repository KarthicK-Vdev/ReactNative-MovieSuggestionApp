import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import React from 'react';
import { GenreData } from '../Data/GenreData';

const Genre = ({navigation}) => {
  const goToGenreMovies=(genre)=>{
    navigation.navigate("GenreMovies",{genre:genre})
  }
  const renderGenreList = ({ item }) => {
    return (
      <Pressable 
      style={styles.genreCard} 
      android_ripple={{ color: 'lightgray', radius: 200, borderless: false }}
      onPress={()=>goToGenreMovies(item.genre)}
      >
        <Text style={styles.genreText}>{item.genre}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.genreContainer}>
      <View style={styles.genreSubContainer}>
        <FlatList
          data={GenreData}
          keyExtractor={(item) => item.id}
          renderItem={renderGenreList}
          showsVerticalScrollIndicator={false}
          // numColumns={1}
          // columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
};

export default Genre;

const styles = StyleSheet.create({
  genreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20, //+ Adjust as needed for padding
  },
  genreSubContainer:{
    width:"70%",
    height:"100%"
  },
  genreCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "100%", // Make sure the card takes approximately half the width
    alignItems: 'center',
    justifyContent:"center"
  },
  genreText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    justifyContent: 'space-between',
  },
});

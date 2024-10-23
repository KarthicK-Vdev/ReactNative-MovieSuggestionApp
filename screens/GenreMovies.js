import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import { MovieData } from '../Data/MovieData';

const GenreMovies = ({ route }) => {
  const { genre } = route.params;
  const genreMovies = MovieData.filter((movie) => movie.genre === genre);

  const renderGenreMovies = ({ item }) => {
    return (
      <View style={styles.genreCard}>
        <Image style={styles.genreImage} source={{ uri: item.image }} />
        <View style={styles.textContainer}>
          <Text style={styles.genreText}>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.genreMoviesContainer}>
      <View style={styles.genreTextContainer}>
        <Text style={styles.genreText}>Genre: 
          <Text style={styles.span}>  {genre}</Text>

        </Text>
      </View>
      <FlatList 
        data={genreMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderGenreMovies}
      />
    </View>
  );
};

export default GenreMovies;

const styles = StyleSheet.create({
  genreMoviesContainer: {
    flex: 1,
    backgroundColor: 'black', // Ensures background color covers the entire screen
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  genreCard: {
    flexDirection: 'row',  // Align image and text side by side
    backgroundColor: 'rgb(40, 40, 40)',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    width: '100%',  // Full width of the screen
  },
  genreImage: {
    width: 100,      // Fixed width for image
    height: 150,     // Fixed height for image
    borderRadius: 10, // Rounded corners for image
    marginRight: 15,  // Space between image and text
  },
  textContainer: {
    flex: 1,          // Allow text container to take up the remaining space
    justifyContent: 'flex-start',  // Align text to the top
  },
  genreText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  genreTextContainer:{
    marginVertical:10
  },
  span:{
    color:"rgb(255, 183, 0)"
  }
});

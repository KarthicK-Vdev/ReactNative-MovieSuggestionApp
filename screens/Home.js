import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import React from 'react';
import { MovieData } from '../Data/MovieData';
import MovieCarousel from '../components/MovieCarousel';

const Home = () => {
  const renderMovieList = ({ item }) => {
    return (
      <View style={styles.popularMovieCard}>
        <Image style={styles.popularMovieImage} source={{ uri: item.image }} />
        <Text style={styles.popularMovieName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.homeContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textStyle}>Welcome to Pick a Flick</Text>
          <Text style={styles.textStyle}>Get your movies</Text>
        </View>

        <View style={styles.popularContainer}>
          <Text style={styles.popular}>Popular Movies</Text>
          <View style={styles.popularMovieContainer}>
            <FlatList
              data={MovieData}
              keyExtractor={(item) => item.id}
              renderItem={renderMovieList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Movie Carousel */}
          <View style={styles.carouselWrapper}>
            <MovieCarousel />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  homeContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  popularContainer: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  popular: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '700',
  },
  popularMovieContainer: {
    flex: 1,
  },
  popularMovieCard: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    height: 170,
    width: 120,
  },
  popularMovieImage: {
    width: 100,
    height: 120,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  popularMovieName: {
    color: 'white',
    fontWeight: '400',
    fontSize: 15,
    padding: 5,
  },
  carouselWrapper: {
    height: 300, // Defined height for carousel
    justifyContent: 'center', // Center the carousel vertically
    alignItems: 'center',    // Center the carousel horizontally
    marginTop: 20,
  },
});

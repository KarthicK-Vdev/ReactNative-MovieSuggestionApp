import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { MovieData } from '../Data/MovieData';

const MovieCarousel = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        width={width * 0.9} // Slightly smaller width
        height={height * 0.4}
        autoPlay={true}
        autoPlayInterval={2000}
        data={MovieData}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image style={styles.carouselImage} source={{ uri: item.image }} />
          </View>
        )}
      />
    </View>
  );
};

export default MovieCarousel;

const styles = StyleSheet.create({
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: '#fff', // Card background
    marginHorizontal: 10, // Space between cards
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

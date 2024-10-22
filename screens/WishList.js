import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const WishList = () => {
  const wishList = useSelector((state) => state.wishList);

  const renderWishListMovie = ({ item }) => {
    return (
      <View style={styles.movieCard}>
        <Image style={styles.movieImage} source={{ uri: item.image }} />
        <Text style={styles.movieName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={wishList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderWishListMovie}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e', // Dark background
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  movieCard: {
    backgroundColor: '#2c2c2e', // Dark card background
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    flex: 1,
    margin: 5,
    padding: 10,
  },
  movieImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  movieName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});

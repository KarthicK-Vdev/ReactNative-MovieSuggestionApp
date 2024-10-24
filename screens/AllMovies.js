import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { MovieData } from '../Data/MovieData';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { addList, removeList } from '../store/slice';
import DropDownPicker from 'react-native-dropdown-picker';

const AllMovies = () => {
  const [sortedMovies, setSortedMovies] = useState(MovieData);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Ascending', value: 'ascending' },
    { label: 'Descending', value: 'descending' },
    { label: 'Rating', value: 'rating' },
  ]);

  const wishList = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  const addToWishList = (item) => {
    const { id, name, image } = item;
    const wishListItem = {
      id: id,
      name: name,
      image: image,
      isWishList: true,
    };
    dispatch(addList(wishListItem));
  };

  const removeFromWishList = (item) => {
    dispatch(removeList(item.id));
  };

  const allMovieList = ({ item }) => {
    let isInWishList = wishList ? wishList.some((wishItem) => wishItem.id === item.id) : false;

    return (
      <View style={styles.movieCard}>
        <Image style={styles.movieImage} source={{ uri: item.image }} />
        <Text style={styles.movieName}>{item.name}</Text>
        <View style={styles.footerSection}>
          <Text style={styles.footerSectionText}>
            <AntDesign name="star" size={20} color="green" /> {item.rating}
          </Text>
          <Pressable onPress={() => (!isInWishList ? addToWishList(item) : removeFromWishList(item))}>
            <AntDesign name={isInWishList ? 'heart' : 'hearto'} size={24} color={isInWishList ? 'red' : 'white'} />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.allMoviesContainer}>
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={dropdownOpen}
          value={dropdownValue}
          items={items}
          setOpen={setDropdownOpen}
          setValue={setDropdownValue}
          setItems={setItems}
          placeholder="Sort By?"
          style={styles.dropdown}
          containerStyle={{ height: 40 }}
          dropDownContainerStyle={styles.dropDownContainer}
          textStyle={styles.dropdownText}
        />
      </View>
      <View style={styles.allMoviesSubContainer}>
        <FlatList 
          data={sortedMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={allMovieList}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default AllMovies;

const styles = StyleSheet.create({
  allMoviesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  allMoviesSubContainer: {
    height: '100%',
    width: '90%',
  },
  dropdownContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  movieCard: {
    height: 300,
    width: '50%',
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  movieImage: {
    height: 190,
    width: 120,
    borderRadius: 14,
  },
  movieName: {
    height: 60,
    width: '70%',
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  footerSection: {
    flexDirection: 'row',
    height: 40,
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerSectionText: {
    color: 'gray',
  },
  dropdown: {
    backgroundColor: '#6200EE',
    borderRadius: 8,
  },
  dropDownContainer: {
    backgroundColor: 'white',
  },
  dropdownText: {
    color: 'black',
  },
});

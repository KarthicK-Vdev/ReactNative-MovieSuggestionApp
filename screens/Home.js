import { View, Text, StyleSheet, ScrollView, FlatList, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { MovieData } from '../Data/MovieData';
import MovieCarousel from '../components/MovieCarousel';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { addList, removeList } from '../store/slice';


const Home = () => {
  const dispatch =  useDispatch()
  const wishList = useSelector((state)=>state.wishList)

  const addToWishList=(item)=>{
    const {id, name, image}=item;
    const wishListItem={
      id:id,
      name:name,
      image:image,
      isWishList:true,
    }
    dispatch(addList(wishListItem))
  }
  const removeFromWishList = (item)=>{
    dispatch(removeList(item.id))
  }
  
  const renderPopularMovieList = ({ item }) => {
    // const popularList= item.filter((item)=>item.section==="popular")
    // console.log(popularList)
    
    let isInWishList;
    if(wishList)
    {
      isInWishList = wishList.some((wishItem)=>wishItem.id===item.id)
    }
    else
    {
      isInWishList=false
    }
    // console.log(isInWishList)
    return ( item.section==="popular" && (
      <View style={styles.popularMovieCard}>
        <Image style={styles.popularMovieImage} source={{ uri: item.image }} />
        <Text style={styles.popularMovieName}>{item.name}</Text>
        <View style={styles.footerSection}>
          <Text style={styles.footerSectionText}><AntDesign name="star" size={20} color="green" /> {item.rating}</Text>
          <Pressable onPress={()=> !isInWishList ? addToWishList(item) : removeFromWishList(item)}>
            <AntDesign name={isInWishList ? "heart" : "hearto"} size={24} color={isInWishList ? "red" : "white"} />
          </Pressable>
        </View>
      </View>
    )
    );
  };

  const renderRecentMovieList = ({ item }) => {
    // const popularList= item.filter((item)=>item.section==="popular")
    // console.log(popularList)
    
    let isInWishList;
    if(wishList)
    {
      isInWishList = wishList.some((wishItem)=>wishItem.id===item.id)
    }
    else
    {
      isInWishList=false
    }
    // console.log(isInWishList)
    return ( item.section==="recent" && (
      <View style={styles.popularMovieCard}>
        <Image style={styles.popularMovieImage} source={{ uri: item.image }} />
        <Text style={styles.popularMovieName}>{item.name}</Text>
        <View style={styles.footerSection}>
          <Text style={styles.footerSectionText}><AntDesign name="star" size={20} color="green" /> {item.rating}</Text>
          <Pressable onPress={()=> !isInWishList ? addToWishList(item) : removeFromWishList(item)}>
            <AntDesign name={isInWishList ? "heart" : "hearto"} size={24} color={isInWishList ? "red" : "white"} />
          </Pressable>
        </View>
      </View>
    )
    );
  };

  return (
    <ScrollView>
      <View style={styles.homeContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textStyle}>Welcome to Pick a Flick</Text>
          <Text style={styles.textStyle}>Get your movies</Text>
        </View>

        <View style={styles.carouselContainer}>
              {/* <Text style={styles.popular}>Our Movies</Text> */}
            <View style={styles.carouselWrapper}>
              <MovieCarousel />
            </View>
          </View> 

        <View style={styles.popularContainer}>
          <Text style={styles.popular}>Popular Movies</Text>
          <View style={styles.popularMovieContainer}>
            <FlatList
              data={MovieData}
              keyExtractor={(item) => item.id}
              renderItem={renderPopularMovieList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
          
          <View style={styles.popularContainer}>
          <Text style={styles.popular}>Recent Movies</Text>
          <View style={styles.popularMovieContainer}>
            <FlatList
              data={MovieData}
              keyExtractor={(item) => item.id}
              renderItem={renderRecentMovieList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
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
    margin:5,
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
    height: 220,
    width: 120,
  },
  popularMovieImage: {
    width: 100,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  popularMovieName: {
    height:50,
    color: 'white',
    fontWeight: '400',
    fontSize: 15,
    padding: 5,
  },
  carouselWrapper: {
    height: 300, 
    justifyContent: 'center', 
    alignItems: 'center',    
    marginTop: 20,
  },
  carouselContainer:{
    marginVertical:30,
  },
  footerSection:{
    width:"80%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  footerSectionText:{
    color:"gray"
  }
  
});

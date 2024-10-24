import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import Home from './screens/Home';
import Genre from './screens/Genre';
import GenreMovies from './screens/GenreMovies';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store/slice';
import WishList from './screens/WishList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllMovies from './screens/AllMovies';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const GenreSection=()=>{
  return(
    <Stack.Navigator 
    screenOptions={{
      headerStyle:{backgroundColor:"rgb(60, 60, 60)"},
      headerTintColor:"white",
      contentStyle:{backgroundColor:"black"}
    }}
    >
      <Stack.Screen name='GenreList' component={Genre} 
      options={{headerShown:false}}
      />
      <Stack.Screen name='GenreMovies' component={GenreMovies} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='light' />
      <NavigationContainer>
        <Drawer.Navigator screenOptions={
          {
          
            headerStyle:{backgroundColor:"rgb(60, 60, 60)"},
    headerTintColor:"white",
    sceneContainerStyle:{backgroundColor:"rgb(0, 0, 0)"},
    drawerContentStyle:{backgroundColor:"rgb(60, 60, 60)"},
    drawerInactiveTintColor:"white",
    drawerActiveTintColor:"rgb(255, 183, 0)",
    drawerActiveBackgroundColor:"black"
    
          }
        }>
          <Drawer.Screen 
          name="home" 
          component={Home} 
          options={{
            title:"Pick A Flick"
          }}
          />
          <Drawer.Screen name='Genre' component={GenreSection} />
          <Drawer.Screen name='WishList' component={WishList} />
          <Drawer.Screen name='AllMovies' component={AllMovies} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


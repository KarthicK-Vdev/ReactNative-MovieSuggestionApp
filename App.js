import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import Home from './screens/Home';
import Jonour from './screens/Jonour';
import JonourMovies from './screens/JonourMovies';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store/slice';
import WishList from './screens/WishList';

const Drawer = createDrawerNavigator();

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
          <Drawer.Screen name="Genre" component={Jonour} />
          <Drawer.Screen name="GenreMovies" component={JonourMovies} />
          <Drawer.Screen name='WishList' component={WishList} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import Home from './screens/Home';
import Jonour from './screens/Jonour';
import JonourMovies from './screens/JonourMovies';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
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
        <Drawer.Screen name="jonour" component={Jonour} />
        <Drawer.Screen name="jonourmovies" component={JonourMovies} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


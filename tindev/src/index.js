import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import Routes from './routes';

export default function App(){
 
  return (
    <Routes />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20
  }
});

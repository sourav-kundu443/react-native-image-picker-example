import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';

import ImagePickerComp from './src/components/ImagePicker';

const App = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImagePickerComp />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;

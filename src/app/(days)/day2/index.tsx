import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen Options={{ title: 'Day2'}} />
      <Text>Hello world day2</Text>
    </View>
  );
};

export default DayDetailsScreen;



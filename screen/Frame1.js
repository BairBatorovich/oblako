import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Category from './component/Category';

export default function Frame1() {
  return (
    <View style={styles.frame1}>
      <Category/>
      <Text>Экран 1</Text>
    </View>
  );
}
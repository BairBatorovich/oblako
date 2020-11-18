import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Item() {
  return (
    <View style={styles.item}>
        <Icon name='checkbox-blank-circle-outline' style={styles.itemIcon}/>
        <Text>Задача 1</Text>
    </View>
  );
}
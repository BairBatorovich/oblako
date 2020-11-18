import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style';
import Item from './Item';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Category() {
  const [vision, setVision] = useState(false);
  return (
    <View style={styles.category}>
      <View style={styles.categoryTitle}>
        <Text style={styles.itemCategoryTxt}>Категория</Text>
      </View>
      <Item/>
      <TouchableOpacity style={styles.itemListComleted} onPress = {() => setVision(!vision)}>
        {vision ? <Icon name='chevron-up' size={30} color={'#ffffff'}/> : <Icon name='chevron-down' size={30} color={'#ffffff'}/>}  
        <Text>Завершенные</Text>      
      </TouchableOpacity>
      {vision ? <View>
        <Item/>
      </View> : <View/>}
      
    </View>
  );
}
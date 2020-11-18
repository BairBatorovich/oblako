import * as React from 'react';
import { Dimensions,View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import styles from './styles';

import Frame1 from '../screen/Frame1';
import Frame2 from '../screen/Frame2';
import Frame3 from '../screen/Frame3';
import Frame4 from '../screen/Frame4';

const Stack = createStackNavigator();

MyStack = () => {
    return (
        <Stack.Navigator initialRouteName='Frame1'>
            <Stack.Screen 
                name='Frame1' 
                component={Frame1}
                options={
                    ({ navigation, route }) => ({
                    headerTitle: props => <View style={styles.header}>
                        <Text style={styles.headerTxt}>Задачи</Text>
                        </View>,
                    })
                }
                />
            <Stack.Screen 
                name='Frame2'
                component={Frame2}
                options={
                    ({ navigation, route }) => ({
                    headerTitle: props => <View style={styles.header}>
                        <Text style={styles.headerTxt}>Задачи</Text>
                        </View>,
                    })
                }
                />
            <Stack.Screen name='Frame3' component={Frame3}/>
            <Stack.Screen name='Frame4' component={Frame4}/>
        </Stack.Navigator>
    );
}



export default MyContainer = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
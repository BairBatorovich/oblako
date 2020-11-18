import { Dimensions, StyleSheet } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    frame1: {
        width: WIDTH,
        height:HEIGHT,
        backgroundColor: '#ffcc99',
        justifyContent: 'flex-start'
    },
    category: {
        width: WIDTH,
        height: HEIGHT/3,
        backgroundColor: 'white',
        justifyContent: 'flex-start'
    },
    categoryTitle: {
        width: WIDTH,
        height: 30,
        justifyContent: 'center',
        paddingLeft: 20
    },
    itemCategoryTxt: {
        textAlign:'left'
    },
    itemList: {
        paddingLeft: 20,
    },
    itemListComleted: {
        paddingLeft: 20,
    },
});

export default styles;
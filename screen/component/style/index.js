import { Dimensions, StyleSheet } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
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
        height: 40,
        width: WIDTH,
        justifyContent: 'flex-start',
        backgroundColor:'gray',
        flexDirection: 'row',
        paddingLeft: 10
    },
    item: {
        width: WIDTH,
        height: 40,
        justifyContent: 'flex-start',
        alignItems: "center",
        flexDirection: 'row',
    },
    itemIcon: {
        marginLeft: 20,
        marginRight: 20,
    },
});

export default styles;
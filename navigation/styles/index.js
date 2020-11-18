import { Dimensions, StyleSheet } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        width: WIDTH,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerTxt: {
        width: WIDTH -60,
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'center',
    },
});

export default styles;
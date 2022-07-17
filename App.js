import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

import {useFonts} from 'expo-font';

import Navigation from './source/navigation/index'



export default function App() {

    const [loaded] = useFonts({
        Bold: require('./source/assets/fonts/Bold.ttf'),
        ExtraLight: require('./source/assets/fonts/ExtraLight.ttf'),
        Light: require('./source/assets/fonts/Light.ttf'),
        Medium: require('./source/assets/fonts/Medium.ttf'),
        Regular: require('./source/assets/fonts/Regular.ttf'),
        SemiBold: require('./source/assets/fonts/SemiBold.ttf'),
        Black: require('./source/assets/fonts/Black.ttf'),
        ExtraBold: require('./source/assets/fonts/ExtraBold.ttf'),
        Thin: require('./source/assets/fonts/Thin.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Navigation/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
    
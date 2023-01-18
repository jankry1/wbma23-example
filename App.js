import {StatusBar} from 'expo-status-bar';
import Navigator from './navigators/Navigator';
import {useFonts} from 'expo-font';

const App = () => {
  const [fontsLoaded] = useFonts({
    LatoBold: require('./assets/fonts/LatoBold.ttf'),
    LatoRegular: require('./assets/fonts/LatoRegular.ttf'),
    LatoLight: require('./assets/fonts/LatoLight.ttf'),
    LatoThin: require('./assets/fonts/LatoThin.ttf'),
    LatoThinItalic: require('./assets/fonts/LatoThinItalic.ttf'),
  });
  return (
    <>
      <Navigator />
      <StatusBar backgroundColor="#D3E3FC" />
    </>
  );
};

export default App;

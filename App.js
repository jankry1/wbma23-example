import {StatusBar} from 'expo-status-bar';
import Navigator from './navigators/Navigator';
import {useFonts} from 'expo-font';
import {MainProvider} from './contexts/MainContext';

const App = () => {
  const [fontsLoaded] = useFonts({
    LatoBold: require('./assets/fonts/LatoBold.ttf'),
    LatoRegular: require('./assets/fonts/LatoRegular.ttf'),
    LatoLight: require('./assets/fonts/LatoLight.ttf'),
    LatoThin: require('./assets/fonts/LatoThin.ttf'),
    LatoThinItalic: require('./assets/fonts/LatoThinItalic.ttf'),
  });
  return (
    <MainProvider>
      <Navigator />
      <StatusBar backgroundColor="#D3E3FC" />
    </MainProvider>
  );
};

export default App;

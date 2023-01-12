import {StatusBar} from 'expo-status-bar';
import {Platform} from 'react-native';
import Navigator from './navigators/Navigator';

const App = () => {
  return (
    <>
      <Navigator />
      <StatusBar style="auto" />
    </>
  );
};

export default App;

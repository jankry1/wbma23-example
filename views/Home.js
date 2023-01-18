import {
  Platform,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  Modal,
} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';
import {Ionicons} from '@expo/vector-icons';

const Home = ({navigation}) => {
  return (
    <>
      <Ionicons
        name="settings-outline"
        size={25}
        color="black"
        style={{position: 'absolute', top: 20, left: 340, zIndex: 1}}
      />
      <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <Text style={styles.text}>Media Sharing App</Text>
      <SafeAreaView style={styles.container}>
        <List navigation={navigation} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'colum',
    backgroundColor: '#77A6F7',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    maxHeight: 100,
  },
  text: {
    position: 'absolute',
    color: '#ffffff',
    marginTop: 70,
    fontSize: 20,
    marginLeft: 5,
  },
});

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;

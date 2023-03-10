import {
  Platform,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Text,
} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';

const Home = ({navigation}) => {
  return (
    <>
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

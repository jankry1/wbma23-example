import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import {uploadsUrl} from '../utils/variables';
import PropTypes from 'prop-types';

const Single = ({route}) => {
  const {description, filename, time_added: timeAdded} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: uploadsUrl + filename}} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.timeAdded}>{timeAdded}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3E3FC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image: {
    width: 350,
    height: 300,
    marginTop: 10,
  },
  timeAdded: {
    fontSize: 12,
    fontFamily: 'LatoRegular',
    marginTop: 0,
    marginBottom: 20,
    marginRight: 0,
  },
  description: {
    fontSize: 15,
    fontFamily: 'LatoRegular',
    marginTop: 10,
    padding: 10,
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;

import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';

const ListItem = ({singleMedia, navigation}) => {
  const item = singleMedia;
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate('Single', item);
      }}
    >
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={{uri: uploadsUrl + item.thumbnails?.w160}}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text style={styles.listDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    backgroundColor: '#6A8E7F',
    marginBottom: 40,
  },
  box: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  image: {
    flex: 1,
    minHeight: 200,
  },
  listTitle: {
    fontWeight: 'bold',
    fontFamily: 'LatoBold',
    fontSize: 20,
    paddingBottom: 15,
    alignItems: 'center',
  },
  listDescription: {
    fontFamily: 'LatoRegular',
    fontSize: 14,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;

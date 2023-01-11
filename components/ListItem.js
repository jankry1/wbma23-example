/* eslint-disable no-unused-vars */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl, baseUrl, loginUrl} from '../utils/variables.js';
import React from 'react';

const ListItem = ({singleMedia}) => {
  const item = singleMedia;
  return (
    <TouchableOpacity>
      <Image
        style={{width: 100, height: 100}}
        source={{uri: uploadsUrl + item.thumbnails?.w160}}
      ></Image>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;

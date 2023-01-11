/* eslint-disable no-unused-vars */
import {FlatList, StyleSheet} from 'react-native';
import ListItem from './ListItem.js';
import React, {useEffect} from 'react';
import {useMedia} from '../hooks/ApiHooks.js';
import {uploadsUrl, loginUrl, baseUrl} from '../utils/variables.js';

const List = () => {
  const {mediaArray} = useMedia();
  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;

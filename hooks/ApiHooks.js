/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import {uploadsUrl, loginUrl, baseUrl} from '../utils/variables.js';
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useFonts} from 'expo-font';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(baseUrl + 'media');
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (file) => {
          const fileResponse = await fetch(baseUrl + 'media/' + file.file_id);
          return await fileResponse.json();
        })
      );

      setMediaArray(media);
    } catch (error) {
      console.error('List, loadMedia', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return {mediaArray};
};

export {useMedia};

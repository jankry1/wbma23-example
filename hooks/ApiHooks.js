/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import {uploadsUrl, loginUrl, baseUrl} from '../utils/variables.js';
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useFonts} from 'expo-font';
import {DefaultTheme} from '@react-navigation/native';

const doFetch = async (url, options) => {
  const response = await fetch(url, options);
  const json = response.json();
  if (!response.ok) {
    throw new Error(json.error || json.message);
  }
  return json;
};

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

const useAuthentication = () => {
  const postLogin = async (userCredential) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredential),
    };
    try {
      return await doFetch(baseUrl + 'login', options);
    } catch (e) {
      throw new Error('postLogin' + e.message);
    }
  };
  return {postLogin};
};

const useUser = () => {
  const getUserByToken = async (token) => {
    const options = {
      method: 'GET',
      headers: {'x-access-token': token},
    };
    try {
      return await doFetch(baseUrl + 'users/user', options);
    } catch (e) {
      throw new Error('checkUser' + e.message);
    }
  };
  const postUser = async (userData) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    try {
      return await doFetch(baseUrl + 'users', options);
    } catch (e) {
      throw new Error('postUser' + e.message);
    }
  };
  return {getUserByToken, postUser};
};

export {useMedia, useAuthentication, useUser};

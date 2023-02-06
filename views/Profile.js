import React from 'react';
import {useContext, useEffect, useState} from 'react';
import {MainContext} from '../contexts/MainContext';
import {useTag} from '../hooks/ApiHooks';
import {uploadsUrl} from '../utils/variables';
import {Card, Icon, ListItem} from '@rneui/themed';

const Profile = () => {
  const {getFilesByTag} = useTag();
  const {user} = useContext(MainContext);
  const [avatar, setAvatar] = useState('');

  const loadAvatar = async () => {
    try {
      const avatarArray = await getFilesByTag('avatar_' + user.user_id);
      setAvatar(avatarArray.pop().filename);
    } catch (error) {
      console.log('user avatar fetch failed', error.message);
    }
  };

  useEffect(() => {
    loadAvatar();
  }, []);

  return (
    <Card>
      <Card.Title>Username: {user.username}</Card.Title>
      <Card.Image source={{uri: uploadsUrl + avatar}}></Card.Image>
      <ListItem>
        <Icon name="email"></Icon>
        <ListItem.Title>{user.email}</ListItem.Title>
      </ListItem>
      <ListItem>
        <Icon name="badge"></Icon>
        <ListItem.Title>{user.full_name}</ListItem.Title>
      </ListItem>
    </Card>
  );
};

export default Profile;

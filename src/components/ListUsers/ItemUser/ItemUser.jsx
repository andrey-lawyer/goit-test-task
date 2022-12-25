import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import {
  CardUser,
  NumberТweets,
  NumberFollowers,
  AvatarUser,
  Button,
} from './ItemUser.styled';

export const ItemUser = ({ id, avatar, user, tweets, followers }) => {
  const [switching, setSwitching] = useState(true);

  const onClickFollowers = () => {
    setSwitching(!switching);
  };

  let textButton;
  let userFollowers;
  if (switching) {
    textButton = 'FOLLOW';
    userFollowers = followers;
  } else {
    textButton = 'FOLLOWING';
    userFollowers = followers + 1;
  }

  const CONTACTS_KEY = `${id}contacts`;

  useEffect(() => {
    const savedState = localStorage.getItem(CONTACTS_KEY);
    let parseState;
    try {
      parseState = JSON.parse(savedState) ?? true;
      console.log(parseState);
    } catch (error) {
      parseState = true;
    }
    setSwitching(parseState);
  }, [CONTACTS_KEY]);

  useEffect(() => {
    window.localStorage.setItem(CONTACTS_KEY, JSON.stringify(switching));
  }, [switching, CONTACTS_KEY]);

  return (
    <CardUser>
      <AvatarUser src={avatar} alt={user} width="48" />
      <NumberТweets>{tweets}</NumberТweets>
      <NumberFollowers>{userFollowers}</NumberFollowers>
      <Button
        colorButton={switching}
        type="button"
        onClick={() => onClickFollowers()}
      >
        {textButton}
      </Button>
    </CardUser>
  );
};

import React from 'react';
import ProfilePhoto from '../ProfilePhoto';
import * as C from './styles';

type Props = {
  userName: string;
  profileImageLink: string;
  lastMessage: string;
  setVisibility:  React.Dispatch<React.SetStateAction<boolean>>;
};

function UserCard({userName, profileImageLink, lastMessage, setVisibility }: Props) {
  return ( 
    <C.Container 
      onClick={() => setVisibility(false)}
    >
      <ProfilePhoto imageSrc={profileImageLink}/>
      <div className='userInfo'>
        <div className='userInfo__name'>{userName}</div>
        <div className='userInfo__lastMessage'>{lastMessage}</div>
      </div> 
    </C.Container>
   );
}

export default UserCard;
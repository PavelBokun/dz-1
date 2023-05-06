import React from "react";
import s from "./FriendMessage.module.css";
import avatar from '../avatar.png'
import { MessageType } from "../HW1";

type FriendMessageType = {
  id: number;
  user: {
    avatar: string;
    name: string;
  };
  message: {
    text: string;
    time: string;
  };
};

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: {message: MessageType}) => {
  return (
    <div
      id={"hw1-friend-message-" + props.message.id}
      className={s.friendMessage}
    >
      <div className={s.friendImageAndText}>
        <img
          id={"hw1-friend-avatar-" + props.message.id}
          // создаёт студент
          src={avatar}
          //
        />
        <div className={s.friendText}>
          <div
            id={"hw1-friend-name-" + props.message.id}
            className={s.friendName}
          >
            {props.message.user.name}

            {/**/}
          </div>
          <p
            id={"hw1-friend-text-" + props.message.id}
            className={s.friendMessageText}
          >
            {props.message.message.text}

            {/**/}
          </p>
        </div>
      </div>
      <div id={"hw1-friend-time-" + props.message.id} className={s.friendTime}>
        {props.message.message.time}

        {/**/}
      </div>
    </div>
  );
};

export default FriendMessage;

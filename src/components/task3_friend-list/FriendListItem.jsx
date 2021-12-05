import React from "react";
import PropTypes from "prop-types";
import {
  itemClass,
  avatarClass,
  nameClass,
  statusOffline,
  statusOnline,
} from "./Friend.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  let status = isOnline ? statusOnline : statusOffline;
  return (
    <li key={id} className={itemClass}>
      <span className={status}></span>
      <br></br>
      <img className={avatarClass} src={avatar} alt="User avatar" width="48" />
      <p className={nameClass}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;

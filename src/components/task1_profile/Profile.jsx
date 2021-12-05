import React from "react";
import PropTypes from "prop-types";
import {
  profileClass,
  nameClass,
  avatarClass,
  tagClass,
  locationClass,
  statsClass,
  labelClass,
  labelClass__span,
  quantityClass,
} from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={profileClass}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={avatarClass} />
        <p className={nameClass}>{username}</p>
        <p className={tagClass}>{tag}</p>
        <p className={locationClass}>{location}</p>
      </div>

      <ul className={statsClass}>
        <li className={labelClass}>
          <span className={labelClass__span}>Followers</span>
          <span className={quantityClass}>{stats.followers}</span>
        </li>
        <li className={labelClass}>
          <span className={labelClass__span}>Views</span>
          <span className={quantityClass}>{stats.views}</span>
        </li>
        <li className={labelClass}>
          <span className={labelClass__span}>Likes</span>
          <span className={quantityClass}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;

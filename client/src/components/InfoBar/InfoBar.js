import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon"/>
      <i  className="fas fa-globe-asia fa-2x"></i>
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
      <i className="fas fa-times fa-1x" alt="close icon"></i></a>
    </div>
  </div>
);

export default InfoBar;
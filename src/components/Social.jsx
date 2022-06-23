import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiDribbble,
  FiLinkedin,
  FiGithub,
  FiYoutube,
} from "react-icons/fi";

const SocialShare = [
  { iconName: <FiGithub />, link: "https://github.com/anditorx" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/andirustianto/",
  },
  {
    iconName: <FiYoutube />,
    link: "https://youtube.com/channel/UCQbmFtP73OmD-neuYFBXCfQ",
  },
  { iconName: <FiTwitter />, link: "https://twitter.com/anditorx" },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/anditorx",
  },
  
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;

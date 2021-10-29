import React from "react";
import avatarK from "../img/avatarK.png";
import avatarG from "../img/avatarG.png";
import avatarL from "../img/avatarL.png";
import avatarV from "../img/avatarV.png";

const TeamMembers = () => (
  <div className="teamMembers">
    <div className="teamMembers-step1">
      <img src={avatarK} alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas</p>
    </div>
    <div className="teamMembers-step2">
      <img src={avatarG} alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas</p>
    </div>
    <div className="teamMembers-step3">
      <img src={avatarL} alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas</p>
    </div>
    <div className="teamMembers-step4">
      <img src={avatarV} alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas</p>
    </div>
  </div>
);

export default TeamMembers;

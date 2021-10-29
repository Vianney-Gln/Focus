import React from "react";
import avatarK from "../assets/images/avatarK.png";
import avatarG from "../assets/images/avatarG.png";
import avatarL from "../assets/images/avatarL.png";
import avatarV from "../assets/images/avatarV.png";

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

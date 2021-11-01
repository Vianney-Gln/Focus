import React from "react";

import avatarK from "../assets/images/avatarK.png";
import avatarG from "../assets/images/avatarG.png";
import avatarL from "../assets/images/avatarL.png";
import avatarV from "../assets/images/avatarV.png";
import reactIconHeart from "../assets/images/reactIconHeart.png";

// import "../styles/logo.css";
// import "../styles/burger.css";
import "../styles/index.css";
import "../styles/aboutUs.css";

const AboutUs = () => (
  <div className="aboutUs">
    {/* <Logo /> */}
    {/* <Burger /> */}
    <h1>Concept</h1>
    <div className="concept">
      <p>
        How to get away from the principle of giant streaming platforms like
        Netflix or Youtube? How would it be, as viewers, to NOT be overwhelmed
        by tons of suggestions all around. How would it be to no longer consume
        cinema as the mass product it became ? What would be a local movie
        theater, in a digital shape, with only a few cinematographic works to
        discover ?
      </p>
      <p className="tagline">Dear reader & viewer, answer is ours & yours.</p>
    </div>
    <h1>by</h1>
    <div className="teamMembers">
      <div className="teamMembers-step1">
        <p className="member-name">Kévin D.</p>
        <img src={avatarK} alt="" />
        <p>Fix them all medkit </p>
        <p className="quote-text">« Unity in numbers »</p>
      </div>
      <div className="teamMembers-step2">
        <p className="member-name">Greg N.</p>
        <img src={avatarG} alt="" />
        <p>console.log(philosophy) </p>
        <p className="quote-text">« !maybe && maybe !not. »</p>
      </div>
      <div className="teamMembers-step3">
        <p className="member-name">Léonie N.</p>
        <img src={avatarL} alt="" />
        <p>Typographically anxious </p>
        <p className="quote-text">« This is good bail, for now. »</p>
      </div>
      <div className="teamMembers-step4">
        <p className="member-name">Vianney G.</p>
        <img src={avatarV} alt="" />
        <p>ESLint premium member </p>
        <p className="quote-text">« Failed to compile tagline. »</p>
      </div>
      <p className="minitext">
        ...and lots of{" "}
        <img className="icon-react-cute" src={reactIconHeart} alt="" />
      </p>
    </div>
  </div>
);

export default AboutUs;

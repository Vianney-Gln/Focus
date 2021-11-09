import React from "react";
import "../styles/switch.scss";

const SwitchMtoS = () => {
  const [type, setType] = React.useState("movie");

  const handleSwitch = () => {
    setType((currentType) => {
      let newType = currentType;
      if (newType === "movie") {
        newType = "serie";
      } else {
        newType = "movie";
      }
      return newType;
    });
  };

  return (
    <button
      type="button"
      className={`btn-switch ${type}`}
      onClick={handleSwitch}
      onKeyPress={handleSwitch}
    >
      {type === "movie" && <h2>MOVIES</h2>}
      {type === "serie" && <h2>TV SHOWS</h2>}
    </button>
  );
};
export default SwitchMtoS;

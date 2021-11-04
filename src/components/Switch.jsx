import React from "react";
import "../styles/switch.scss";

const SwitchMtoS = () => {
  const [type, setType] = React.useState("movie");

  const handleSwitch = () => {
    setType((t) => {
      let tp = t;
      if (tp === "movie") {
        tp = "serie";
      } else {
        tp = "movie";
      }
      return tp;
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

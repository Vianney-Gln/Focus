import React from "react";

const SwitchMtoS = () => {
  const [type, setType] = React.useState("movie");

  const handleSwitch = () => {
    setType((t) => {
      let tp = t;
      console.log(tp);
      if (tp === "movie") {
        tp = "serie";
      } else {
        tp = "movie";
      }
      return tp;
    });
    console.log(type);
  };

  return (
    <div
      className={`switch ${type}`}
      onClick={handleSwitch}
      onKeyPress={handleSwitch}
      role="button"
      tabIndex="0"
    >
      <h2 className="movie">MOVIES</h2>
      <h2 className="serie">TV SERIES</h2>
    </div>
  );
};
export default SwitchMtoS;

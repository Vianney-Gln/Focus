import React from "react";
import "../styles/category.css";
import BackgroundImage from "../components/BackgroundImage";

const Category = () => {
  // définition de 30 divs
  const nbrItems = 28;
  const items = [];

  for (let i = 0; i < nbrItems; i += 1) {
    items.push(<div className="preview-items" />);
  }

  return (
    <>
      <BackgroundImage />
      <div className="container-category">
        {/** Ici composant NavBar */}

        <div className="title-latest">
          <h1>LATEST</h1>
        </div>
        <div className="container-previous-items">{items}</div>
      </div>
    </>
  );
};
export default Category;

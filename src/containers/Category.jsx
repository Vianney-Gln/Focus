import React from "react";
import "../styles/category.css";
import BackgroundImage from "../components/BackgroundImage";
import ItemsPreviews from "../components/ItemsPreviews";
import "../styles/backgroundImage.css";

const Category = () => {
  // définition de 28 items
  const nbrItems = 28;
  const items = [];

  for (let i = 0; i < nbrItems; i += 1) {
    items.push(<ItemsPreviews />);
  }

  return (
    <>
      <BackgroundImage />
      <div className="container-category">
        {/** Ici composant NavBar */}

        <div className="container-previous-items-center">
          <div className="title-category">
            <h1>LATEST</h1>
          </div>
          <div className="container-previous-items">{items}</div>
        </div>
      </div>
    </>
  );
};
export default Category;

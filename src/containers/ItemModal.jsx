import React from "react";
import westworlded from "../assets/images/westworlded.jpg";
import "../styles/index.css";
import "../styles/itemModal.css";
import "../styles/itemsPreviews.css";

const ItemModal = () => (
  <div className="itemModal">
    <div className="top-thumbnail">
      {/* <ItemsPreviews /> */}
      <img src={westworlded} alt="" />
      <h1>westworld</h1>
      <button className="button-close" type="button">
        X
      </button>
    </div>
    <div className="bottom-infos">
      <div className="bottom-infos-grid">
        <div className="bottom-infos-grid-creators">
          Lisa Joy & Jonathan Nolan
        </div>
        <div className="bottom-infos-grid-date">2016</div>
        <div className="bottom-infos-grid-length">3 Seasons</div>
        <div className="bottom-infos-grid-starRater">
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />

          {/* <StarRater /> */}
        </div>
        <div className="bottom-infos-grid-availableOn">
          Available On <i className="fa fa-play-circle-o" />
        </div>
        <div className="bottom-infos-grid-addToMyList">
          <button className="button-plus" type="button">
            +
          </button>
          <span>Add to my list</span>
        </div>
        <div className="bottom-infos-grid-platforms" />
        <div className="bottom-infos-grid-synopsis">
          In the 2050s, Delos Inc. operates several theme parks, including the
          American-Old-West-themed Westworld. Each environment is populated by
          hosts. Indistinguishable from humans, these androids are programmed to
          fulfill the guests every desire. They will engage in—and be the
          objects of—every kind of violent and/or sexual activity, but their
          programming makes it impossible for them to allow the guests to be
          harmed. The Operators create narratives for these hosts to repeat each
          day while interacting with guests, but they wipe their memories each
          cycle. Delos Inc. party line is that the android hosts, being
          machines, can not be harmed by these scenarios the same way that a
          human would be.{" "}
        </div>
      </div>
    </div>
  </div>
);

export default ItemModal;

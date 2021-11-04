/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import "../styles/suggestion.css";
import React from "react";
import { Slide } from "react-slideshow-image";

const proprieties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Slideshow = () => (
  <div className="lecarou">
    <div className="containerSlide">
      <Slide {...proprieties}>
        <div className="eachSlide">
          <div>
            <img
              src="http://image.tmdb.org/t/p/w780/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="eachSlide">
          <div>
            <img
              src="http://image.tmdb.org/t/p/w780/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="eachSlide">
          <div>
            <img
              src="http://image.tmdb.org/t/p/w780/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="eachSlide">
          <div>
            <img
              src="http://image.tmdb.org/t/p/w780/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
              alt=""
            />
          </div>
        </div>
      </Slide>
    </div>
  </div>
);

export default Slideshow;

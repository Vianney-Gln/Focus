import React from "react";

function ImageItemPreviews({ source }) {
  return (
    <img
      // src="http://image.tmdb.org/t/p/w300/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
      src={source}
      alt="films"
    />
  );
}

export default ImageItemPreviews;

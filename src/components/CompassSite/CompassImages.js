import React, { useState } from "react";
import classes from "./CompassImages.module.css";
import ImageSchema from "../ImageSchema";
import data from "./../../data/data.json";

const CompassImages = () => {
  const [loadedImages, setLoadedImages] = useState(15);

  const loadMoreImages = () => {
    setLoadedImages((prevLoadedImages) => prevLoadedImages + 5);
  };
  const RandomNumber = Math.floor(Math.random() * 660);
  console.log(RandomNumber, data);
  return (
    <>
      <div className={classes.scrollContainer}>
        <div className={classes.wrapper}>
          {data
            .slice(RandomNumber, RandomNumber + loadedImages)
            .map((imageData) => (
              <ImageSchema key={imageData.id} imageData={imageData} />
            ))}
        </div>
      </div>
      <button onClick={loadMoreImages}>Load More</button>
    </>
  );
};

export default CompassImages;

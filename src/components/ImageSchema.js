import React, { useState } from "react";
import classes from "./ProfileSite/ProfileImage/ProfileImage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import ImagePreviewModal from "./ImagePreviewModal/ImagePreviewModal";

const ImageSchema = ({ imageData }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isImageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div onClick={() => setModalOpen(true)} className={classes.imageWrapper}>
        <div className={classes.imageContainer}>
          <div className={classes.iconsContainer}>
            <div className={classes.faHeart}>
              <FontAwesomeIcon icon={faHeart} />
              <span>2357</span>
            </div>
            <div className={classes.faComment}>
              <FontAwesomeIcon icon={faComment} />
              <span>1211</span>
            </div>
          </div>
          {!isImageLoaded && (
            <div className={classes.placeholder}>
              {/* You can use a placeholder image or a loading animation here */}
              Loading...
            </div>
          )}
          <img
            alt={imageData.photo_description}
            src={imageData.photo_image_url}
            onLoad={handleImageLoad}
            style={{ display: isImageLoaded ? "block" : "none" }}
          />
        </div>
      </div>

      <ImagePreviewModal
        handleClose={() => setModalOpen(false)}
        isOpen={isModalOpen}
      >
        <div className={classes.modalImageWrapper}>
          <img
            loading="lazy"
            alt={imageData.photo_description}
            src={imageData.photo_image_url}
          />
        </div>
      </ImagePreviewModal>
    </>
  );
};

export default ImageSchema;

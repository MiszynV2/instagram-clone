import classes from "./ProfileSite/ProfileImage/ProfileImage.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faHeart} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import ImagePreviewModal from "./ImagePreviewModal/ImagePreviewModal";


const ImageSchema = ({imageData}) => {
    const [isModalOpen,setModalOpen] = useState(false)

    return (
        <>

            <div onClick={() => setModalOpen(true)} className={classes.imageWrapper}>
                <div className={classes.imageContainer}>
                    <div className={classes.iconsContainer}>
                        <div className={classes.faHeart}><FontAwesomeIcon icon={faHeart}/><span>2357</span></div><div className={classes.faComment}><FontAwesomeIcon icon={faComment}/><span>1211</span></div>
                    </div>
                    <img alt={imageData.photo_description} src={imageData.photo_image_url}/>

                </div>
            </div>

            <ImagePreviewModal handleClose={() => setModalOpen(false)} isOpen={isModalOpen}>
                <div className={classes.modalImageWrapper}>
                    <img alt={imageData.photo_description} src={imageData.photo_image_url}/>

                </div>
            </ImagePreviewModal>
        </>
    );
};
export default ImageSchema;
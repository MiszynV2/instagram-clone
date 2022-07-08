import classes from "./ProfileSite/ProfileImage/ProfileImage.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faHeart} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import ShowPicture from "./ShowPicture";


const ImageSchema = () => {
    const [isImageClicked,setImageClicked] = useState(false)
    const showImageHandler = function (){
        if(isImageClicked===false){
            setImageClicked(true)}
            console.log('dupa')
    }
    return (
        <>

        <div onClick={showImageHandler} className={classes.imageWrapper}>
            <div className={classes.imageContainer}>
                <div className={classes.iconsContainer}>
                    <div className={classes.faHeart}><FontAwesomeIcon icon={faHeart}/><span>2357</span></div><div className={classes.faComment}><FontAwesomeIcon icon={faComment}/><span>1211</span></div>
                </div>
                <img alt="images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEt7nNTNK6Rslf8QZmV31yBwArShVemQ1RQ&usqp=CAU"/>
            </div>
        </div>
        </>
    );
};
export default ImageSchema;
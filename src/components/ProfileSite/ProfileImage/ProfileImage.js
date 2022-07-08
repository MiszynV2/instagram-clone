import classes from './ProfileImage.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faHeart, faTableColumns, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import ImageSchema from "../../ImageSchema";


const ProfileImage = () => {
    return (
            <div className={classes.wrapper}>
                <div className={classes.ImagesButtons}>
                    <span className={faTableColumns}><FontAwesomeIcon icon={faTableColumns}/> POSTY</span>
                    <span className={faUserCircle}><FontAwesomeIcon icon={faUserCircle}/> Z OZNACZENIEM</span>
                </div>
                <div className={classes.ImagesGallery}>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>
                    <ImageSchema/>

                </div>
            </div>
    );
};
export default ProfileImage;
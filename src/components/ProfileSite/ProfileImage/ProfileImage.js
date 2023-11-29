import classes from './ProfileImage.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTableColumns, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import ImageSchema from "../../ImageSchema";
import data from './../../../data/data.json'

const ProfileImage = () => {
    return (
            <div className={classes.wrapper}>
                <div className={classes.ImagesButtons}>
                    <span className={faTableColumns}><FontAwesomeIcon icon={faTableColumns}/> POSTY</span>
                    <span className={faUserCircle}><FontAwesomeIcon icon={faUserCircle}/> Z OZNACZENIEM</span>
                </div>
                <div className={classes.ImagesGallery}>
                    <ImageSchema imageData={data[data.length -1]}/>
                    <ImageSchema imageData={data[data.length -2]}/>
                    <ImageSchema imageData={data[data.length -3]}/>
                    <ImageSchema imageData={data[data.length -4]}/>
                    <ImageSchema imageData={data[data.length -5]}/>
                    <ImageSchema imageData={data[data.length -6]}/>

                </div>
            </div>
    );
};
export default ProfileImage;
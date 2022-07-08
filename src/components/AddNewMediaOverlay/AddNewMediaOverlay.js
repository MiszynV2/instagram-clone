import classes from './AddNewMediaOverlay.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faVideoCamera,faCross } from '@fortawesome/free-solid-svg-icons'


const AddNewMediaOverlay = () => {
    return (
        <div className={classes.overlay}>
            <FontAwesomeIcon className={classes.faCross} icon={faCross}/>
            <div className={classes.wrapper}>
            <div className={classes.newAddMediaWindow}>
                <div className={classes.header}>
                    <span className={classes.headText}>Utwórz nowy post</span>
                </div>
                <div className={classes.dropMediaHerePlace}>
                    <div className={classes.dropMediaHereLogoText}>
                        <FontAwesomeIcon className={classes.faVideoCamera} icon={faVideoCamera}/>
                        <span className={classes.dropMediaHereText}>Przeciągnij zdjęcia i filmy tutaj</span>
                    </div>
                    <button className={classes.button} onClick={() => alert('no backend here :)')}>Wybierz z komputera</button>
                </div>
            </div>
            </div>

        </div>

    );
};
export default AddNewMediaOverlay;
import classes from './MainProfileInfo.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUserPlus,faArrowDown,faListDots } from '@fortawesome/free-solid-svg-icons'
import data from './../../../data/data.json'


const MainProfileInfo = () => {
    const user =data[data.length - 1].user
    return (
    <div className={classes.wrapper}>
        <div className={classes.userImageDiv}><img className={classes.userImage} alt="" src={user.profile_image.large}/></div>
        <div className={classes.profileInformation}>
            <div className={classes.nameAndButtons}>
                <span className={classes.username}>{user.name}</span>
            </div>
            <div className={classes.profileStats}>
                <span><span className={classes.bold}>21312</span> posts</span>
                <span><span className={classes.bold}>3223</span> followers</span>
                <span><span className={classes.bold}>3223</span> following</span>
            </div>
        </div>
    </div>
    );
};
export default MainProfileInfo;
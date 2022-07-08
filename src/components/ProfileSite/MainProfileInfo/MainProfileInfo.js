import classes from './MainProfileInfo.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUserPlus,faArrowDown,faListDots } from '@fortawesome/free-solid-svg-icons'


const MainProfileInfo = () => {
    return (
    <div className={classes.wrapper}>
        <div className={classes.userImageDiv}><img className={classes.userImage} alt="profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/International_prototype_of_the_kilogram_aka_Le_Grand_K.jpg/800px-International_prototype_of_the_kilogram_aka_Le_Grand_K.jpg?1657232637331"/></div>
        <div className={classes.profileInformation}>
            <div className={classes.nameAndButtons}>
                <span className={classes.username}>Profile.Username</span>
                <div className={classes.buttonDiv}><span>Message</span></div>
                <div className={classes.buttonDiv}><FontAwesomeIcon icon={faUserPlus}/></div>
                <div className={classes.buttonDiv}><FontAwesomeIcon icon={faArrowDown}/></div>
                <FontAwesomeIcon className={classes.dots} icon={faListDots}/>
            </div>
            <div className={classes.profileStats}>
                <span><span className={classes.bold}>21312</span> posts</span>
                <span><span className={classes.bold}>3223</span> followers</span>
                <span><span className={classes.bold}>3223</span> following</span>
            </div>
            <div className={classes.description}>
                <span>This HTML file is a template. If you open it directly
                    in the browser, you will see an empty page.</span>
            </div>
        </div>
    </div>
    );
};
export default MainProfileInfo;
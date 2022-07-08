import classes from './ShowHearthInfo.module.css';


const ShowHearthInfo = () => {
    return (
        <div className={classes.wrapper}>
            <span className={classes.timeHeader}>In this month</span>

            <div className={classes.userImgInfoCointainer}>
               <div className={classes.userImageDiv}><img className={classes.userImage} alt="profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/International_prototype_of_the_kilogram_aka_Le_Grand_K.jpg/800px-International_prototype_of_the_kilogram_aka_Le_Grand_K.jpg?1657232637331"/></div>
               <span className={classes.userInfo}>
                   <span className={classes.bold}>piotrkeNowak</span> likes your post.<span className={classes.thin}>5 week ego</span></span>
            </div>
        </div>
    );
};
export default ShowHearthInfo;
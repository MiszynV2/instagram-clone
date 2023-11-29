import classes from './PropozytionForYou.module.css'




const PropozytionForYou = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.UserAccount}>
                <div className={classes.profilImageDiv}>
                    <img className={classes.profilImage} alt='your photo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEt7nNTNK6Rslf8QZmV31yBwArShVemQ1RQ&usqp=CAU"/>
                    <div className={classes.userInfo}>
                        <span className={classes.username}>mozliwa.misja</span>
                        <span className={classes.nameSurname}>Jank Owalski</span>
                        <span className={classes.switch}>Switch</span>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default PropozytionForYou;
import classes from "./ImageContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faComment,faMessage,faBookmark } from "@fortawesome/free-solid-svg-icons";

const ImageContainer = () => {

    return (
        <article>
            <div className={classes.wrapper}>
                <div className={classes.userInformation}>
                    <header>
                        <div className={classes.userImageDiv}><img className={classes.userImage} alt="profile picture" src="https://img2.thejournal.ie/inline/4683220/original/?width=339&version=4683220"/></div>
                        <span className={classes.username}>user.user</span>
                    </header>
                </div>
                <div className={classes.imageWrapper}>
                <div className={classes.imageDiv}>
                    <img className={classes.image} alt="picture" src="https://img2.thejournal.ie/inline/4683220/original/?width=339&version=4683220"/>
                </div>
                </div>

                <div>
                    <div className={classes.iconsWrapper}>
                    <section className={classes.icons}>
                        <FontAwesomeIcon className={classes.faHeart} icon={faHeart}/>
                        <FontAwesomeIcon className={classes.faComment} icon={faComment}/>
                        <FontAwesomeIcon className={classes.faMessage} icon={faMessage}/>
                    </section>
                        <FontAwesomeIcon className={classes.faBookmark} icon={faBookmark}/>
                    </div>
                    <section className={classes.textInformation}>
                        <div>
                            <div className={classes.userImageDiv}>
                                <img alt="profile picture" className={classes.userImageSmall} src="https://img2.thejournal.ie/inline/4683220/original/?width=339&version=4683220"/>
                            </div>
                        </div>
                        <span className={classes.likesInformation}>liked by <span className={classes.bold}>ejjeej</span> and 12 others</span>
                    </section>
                    <div className={classes.description}>
                        <span className={classes.bold}>Jankowalske </span><span>Frajerskie zachowanie, jak nie umiesz z kimś przegrywać to w sapera nakurwiaj, a nie się rzucasz i nie dostajesz w.</span>
                    </div>
                </div>
                <div className={classes.time}>
                    <span className={classes.publicationTime}>3 hours ego</span>
                </div>
            </div>
        </article>
);
};
export default ImageContainer;
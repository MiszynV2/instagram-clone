import classes from "./ImageContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faComment,faMessage,faBookmark } from "@fortawesome/free-solid-svg-icons";

const ImageContainer = ({imageData}) => {
    return (
        <article>
            <div className={classes.wrapper}>
                <div className={classes.userInformation}>
                    <header>
                        <div className={classes.userImageDiv}><img className={classes.userImage} alt="" src={imageData.user.profile_image.medium}/></div>
                        <span className={classes.username}>{imageData.photographer_username}</span>
                    </header>
                </div>
                <div className={classes.imageWrapper}>
                <div className={classes.imageDiv}>
                    <img className={classes.image} alt={imageData.photo_description} src={imageData.photo_image_url}/>
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
                                <img alt="" className={classes.userImageSmall} src={imageData.friend.profile_image.small}/>
                            </div>
                        </div>
                        <span className={classes.likesInformation}>
                            liked by
                            <span className={classes.bold}>{imageData.friend.name}</span>
                            <span style={{margin: '0 2px'}}>
                                and
                            </span>
                            {imageData.user.likes}
                            <span style={{margin: '0 2px'}}>others</span></span>
                    </section>
                    <div className={classes.description}>
                        <span className={classes.bold}>{imageData.photo_description} </span><span>{imageData.ai_description}</span>
                    </div>
                </div>
                <div className={classes.time}>
                    <span className={classes.publicationTime}>{new Date(imageData.photo_submitted_at).toLocaleDateString()}</span>
                </div>
            </div>
        </article>
);
};
export default ImageContainer;
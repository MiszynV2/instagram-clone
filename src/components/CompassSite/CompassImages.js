import classes from './CompassImages.module.css'
import ImageSchema from "../ImageSchema";
import data from './../../data/data.json'
const CompassImages = () => {

    return (
        <>
        <div className={classes.scrollContainer}>
                <div className={classes.wrapper}>

                        {data.slice(50).map(imageData => (
                            <ImageSchema imageData={imageData}/>
                        ))}
                </div>
        </div>
x
        </>



    );
};
export default CompassImages;
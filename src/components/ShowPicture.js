import classes from "./ShowPicture.module.css";

const ShowPicture = () => {
    return (
        <>
        <div className={classes.centerDiv}>
            <img alt="images" className={classes.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEt7nNTNK6Rslf8QZmV31yBwArShVemQ1RQ&usqp=CAU"/>
            <div className={classes.overlay}>
            </div>
        </div>
        </>
    );
};
export default ShowPicture;
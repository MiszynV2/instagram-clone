import classes from './Footer.module.css'



const Footer = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.footerLinksfirst}>
                <span>Meta</span>
            <span>About</span>
            <span>Blog</span>
            <span>Jobs</span>
            <span>API</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Top Accounts</span>
            <span>Hashtags</span>
            <span>Locations</span>
                <span>Kilogram Lite</span></div>
                <div className={classes.footerLinkssecond}>
            <span>Contact Uploading & Non-Users</span>
            </div>
            <span>English</span>
            <span>© 2022 Kilogram from Wojtek</span>

        </div>

    );
};
export default Footer;
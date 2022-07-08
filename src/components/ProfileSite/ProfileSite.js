import MainProfileInfo from "./MainProfileInfo/MainProfileInfo";
import Header from "../Header/Header";
import classes from './ProfileSite.module.css'
import ProfileImage from "./ProfileImage/ProfileImage";
import Footer from "../Footer/Footer";


const ProfileSite = () => {
    return (
        <>
            <MainProfileInfo/>
            <ProfileImage/>
        </>
    );
};
export default ProfileSite;
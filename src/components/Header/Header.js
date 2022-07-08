import classes from './Header.module.css'
import Searchbar from "../SearchBar/Searchbar";
import ShowHearthInfo from "../ShowHearthInfo/ShowHearthInfo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faMessage, faPlus, faCompass, faHeart, faPerson} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import {useState} from "react";


const Header = () => {
    const [isHearthClicked,setHearth] = useState(false)
    const popHearthHandler = function () {
       setHearth(!isHearthClicked)
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <Link to='/'><h1>Kilogram</h1></Link>
                {/*<Searchbar/>*/}
                <ul className={classes.iconsList}>
                    <Link to='/home'>
                        <li><FontAwesomeIcon icon={faHome}/></li>
                    </Link>
                    <Link to='/add-media'>
                        <li><FontAwesomeIcon icon={faPlus}/></li>
                    </Link>
                    <Link to='/discover'>
                        <li><FontAwesomeIcon icon={faCompass}/></li>
                    </Link>
                    <li onClick={popHearthHandler}><FontAwesomeIcon icon={faHeart}/></li>
                    {isHearthClicked?<ShowHearthInfo/>:''}
                    <Link to='/your-profile'>
                        <li><FontAwesomeIcon icon={faPerson}/></li>
                    </Link>
                </ul>
            </div>
        </div>

    );
};
export default Header;
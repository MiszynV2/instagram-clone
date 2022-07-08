import classes from './Header.module.css'
import Searchbar from "../SearchBar/Searchbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faMessage, faPlus, faCompass, faHeart, faPerson} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <Link to='/'><h1>Kilogram</h1></Link>
                <Searchbar/>
                <ul className={classes.iconsList}>
                    <Link to='/home'>
                        <li><FontAwesomeIcon icon={faHome}/></li>
                    </Link>
                    <li><FontAwesomeIcon icon={faMessage}/></li>
                    <Link to='/add-media'>
                        <li><FontAwesomeIcon icon={faPlus}/></li>
                    </Link>
                    <Link to='/discover'>
                        <li><FontAwesomeIcon icon={faCompass}/></li>
                    </Link>
                    <li><FontAwesomeIcon icon={faHeart}/></li>
                    <Link to='/your-profile'>
                        <li><FontAwesomeIcon icon={faPerson}/></li>
                    </Link>
                </ul>
            </div>
        </div>

    );
};
export default Header;
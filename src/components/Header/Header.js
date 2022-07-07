import classes from './Header.module.css'
import Searchbar from "../SearchBar/Searchbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome,faMessage,faPlus,faCompass,faHeart,faPerson } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div className={classes.wrapper}>
        <div className={classes.header}>

            <h1>kilogram</h1>
            <Searchbar/>
            <ul className={classes.iconsList}>
                <li><FontAwesomeIcon icon={faHome} /></li>
                <li><FontAwesomeIcon icon={faMessage} /></li>
                <li><FontAwesomeIcon icon={faPlus} /></li>
                <li><FontAwesomeIcon icon={faCompass} /></li>
                <li><FontAwesomeIcon icon={faHeart} /></li>
                <li><FontAwesomeIcon icon={faPerson} /></li>
            </ul>
        </div>
        </div>

    );
};
export default Header;
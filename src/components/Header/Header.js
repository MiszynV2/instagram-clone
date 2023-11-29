import React, { useRef, useState, useEffect } from "react";
import classes from "./Header.module.css";
import Searchbar from "../SearchBar/Searchbar";
import ShowHearthInfo from "../ShowHearthInfo/ShowHearthInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMessage,
  faPlus,
  faCompass,
  faHeart,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isHearthClicked, setHearth] = useState(false);
  const hearthRef = useRef(null);

  const popHearthHandler = () => {
    setHearth(!isHearthClicked);
  };

  const handleClickOutside = (event) => {
    if (hearthRef.current && !hearthRef.current.contains(event.target)) {
      setHearth(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Link to="/">
          <h1>Kilogram</h1>
        </Link>
        {/* <Searchbar /> */}
        <ul className={classes.iconsList}>
          <Link to="/home">
            <li>
              <FontAwesomeIcon icon={faHome} />
            </li>
          </Link>
          <Link to="/add-media">
            <li>
              <FontAwesomeIcon icon={faPlus} />
            </li>
          </Link>
          <Link to="/discover">
            <li>
              <FontAwesomeIcon icon={faCompass} />
            </li>
          </Link>
          <li onClick={popHearthHandler} ref={hearthRef}>
            <FontAwesomeIcon icon={faHeart} />
          </li>
          {isHearthClicked ? <ShowHearthInfo /> : ""}
          <Link to="/your-profile">
            <li>
              <FontAwesomeIcon icon={faPerson} />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

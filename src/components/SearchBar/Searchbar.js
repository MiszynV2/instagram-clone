import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./Searchbar.module.css";

const SearchForm = () => {

    return (
        <>
            <form className={classes["input_form"]}>

                <FontAwesomeIcon className={classes.icon} icon={faSearch}/>
                <input

                    type="text"
                    className={classes["input"]}
                    placeholder="Search"
                />

            </form>

        </>
    );
};
export default SearchForm;
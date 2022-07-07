import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./Searchbar.module.css";

const SearchForm = () => {

    return (
        <div>
            <form className={classes["input_form"]}>

                <FontAwesomeIcon className={classes.icon} icon={faSearch}/>
                <div className={classes["inputWrapper"]}>
                    <input
                        type="text"
                        className={classes["input"]}
                        placeholder="Search"
                    />

                </div>

            </form>
        </div>
    );
};
export default SearchForm;
import styles from './SearchBar.module.css';
import { CiSearch } from "react-icons/ci";

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input type="text" />
            <CiSearch id="search" color='white' size="2rem" />
        </div>
    );
}

export default SearchBar;
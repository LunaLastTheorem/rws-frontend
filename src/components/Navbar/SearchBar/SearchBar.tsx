import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <div className={styles.searchBar} id='searchcontainer'>
            <div className={styles.searchBarContainer}>
                <input type="text" />
                <button className={styles.searchButton}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;
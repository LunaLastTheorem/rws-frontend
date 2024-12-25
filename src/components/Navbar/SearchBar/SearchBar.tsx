import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input type="text" />
        </div>
    );
}

export default SearchBar;
import styles from './ResponsiveMenu.module.css';

function ResponsiveMenu() {
    return (
        <div className={styles.menu} id='toggableMenu'>
            <a href="/about">About</a>
            <a href="/films">Films</a>
            <a href="/home">Home</a>
            <a href="/news">News</a>
        </div>
    );
}

export default ResponsiveMenu;
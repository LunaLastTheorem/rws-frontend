import styles from './ResponsiveMenu.module.css';

function ResponsiveMenu() {
    return (
        <div className={styles.menu} id='toggableMenu'>
            <a href="#about">About</a>
            <a href="https://www.youtube.com/@RoseWindowStudios">Films</a>
            <a href="rws-frontend/home">Home</a>
            <a href="/news">RSVP</a>
        </div>
    );
}

export default ResponsiveMenu;
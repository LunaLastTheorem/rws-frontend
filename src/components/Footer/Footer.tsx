import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className="footer">
            <div className={styles.top}>
                <div className={styles.logo}></div>
                <div className={styles.quicklink}></div>
                <div className={styles.quicklink}></div>
                <div className={styles.subscribe}></div>
            </div>
            <div className={styles.bot}>
                <div className={styles.social}></div>
                <div className={styles.centerlogo}></div>
                <div className={styles.copyright}></div>
            </div>
        </footer>
    );
}

export default Footer;
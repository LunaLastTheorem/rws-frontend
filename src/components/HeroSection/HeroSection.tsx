import styles from './HeroSection.module.css';
import HeroSectionTitle from './HeroSectionTitle/HeroSectionTitle';
import video from '/videos/tunnelpreview.mp4';

function HeroSection() {
    return (
        <div className={styles.hero}>
            <video autoPlay loop muted id='myVideo'>
                <source src={video} type="video/mp4" />
            </video>
            <div className={styles.content}>
                <HeroSectionTitle title='The Tunnel' year='2024' />
                <HeroSectionTitle title='Clockwise' year='2024' />
                <HeroSectionTitle />
            </div>
        </div>
    );
}

export default HeroSection;
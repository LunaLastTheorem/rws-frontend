import styles from './HeroSection.module.css';
import HeroSectionTitle from './HeroSectionTitle/HeroSectionTitle';
import video from '/videos/clockwise-preview.mp4';

function HeroSection() {
    return (
        <div className={styles.hero}>
            <video autoPlay loop muted id='myVideo'>
                <source src={video} type="video/mp4" />
            </video>
            <div className={styles.content}>
                <HeroSectionTitle title='The Tunnel' year='2024' link="https://youtu.be/p2JNJF3TxZE?si=BNeYIfdFqWHzDF3A" />
                <HeroSectionTitle title='Clockwise' year='2024' link="https://youtu.be/oyr1xsTfuTU?si=2jDCGg83oIPNbodZ" />
                <HeroSectionTitle title='Premire' year='2025' link="#" />
            </div>
        </div>
    );
}

export default HeroSection;
import styles from './HeroSection.module.css';
import { useEffect, useRef, useState } from 'react';
import HeroSectionTitle from './HeroSectionTitle/HeroSectionTitle';
import clockwiseVid from '/videos/clockwise-preview.mp4';
import tunnelVid from '/videos/tunnel-preview.mp4';

const videoMap: Record<string, string> = {
    'Clockwise': clockwiseVid,
    'The Tunnel': tunnelVid
}

function HeroSection() {
    const [currentVideo, setCurrentVideo] = useState(clockwiseVid);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleHover = (title: string) => {
        const video = videoMap[title];
        if (video) setCurrentVideo(video)
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    }, [currentVideo]);

    return (
        <div className={styles.hero}>
            <video ref={videoRef} autoPlay loop muted id='myVideo'>
                <source src={currentVideo} type="video/mp4" />
            </video>
            <div className={styles.content}>
                <HeroSectionTitle onHover={handleHover} title='The Tunnel' year='2024' link="https://youtu.be/p2JNJF3TxZE?si=BNeYIfdFqWHzDF3A" />
                <HeroSectionTitle onHover={handleHover} title='Clockwise' year='2024' link="https://youtu.be/oyr1xsTfuTU?si=2jDCGg83oIPNbodZ" />
                <HeroSectionTitle onHover={handleHover} title='Premiere' year='2025' link="#" />
            </div>
        </div>
    );
}

export default HeroSection;
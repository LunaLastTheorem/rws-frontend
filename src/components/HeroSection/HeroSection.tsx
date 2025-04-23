import styles from './HeroSection.module.css';
import { useEffect, useRef, useState } from 'react';
import HeroSectionTitle from './HeroSectionTitle/HeroSectionTitle';
import clockwiseVid from '/videos/clockwise-preview.mp4';
import tunnelVid from '/videos/tunnel-preview.mp4';
import defaultVid from '/videos/default.mp4'
import Video from './Video'

const videoList: Video[] = [
    {
        video: undefined,
        title: "Premiere",
        releaseDate: "2025",
        link: "#"
    },
    {
        video: clockwiseVid,
        title: "clockwise",
        releaseDate: "2024",
        link: "https://youtu.be/oyr1xsTfuTU?si=2jDCGg83oIPNbodZ"
    },
    {
        video: tunnelVid,
        title: "The Tunnel",
        releaseDate: "2024",
        link: "https://youtu.be/p2JNJF3TxZE?si=BNeYIfdFqWHzDF3A"
    }
]


function HeroSection() {
    const [currentVideo, setCurrentVideo] = useState(clockwiseVid);
    const videoRef = useRef<HTMLVideoElement>(null);


    const handleHover = (title: string) => {
        const videoItem = videoList.find(v => v.title === title);
        const video = videoItem?.video;
        if (video && window.scrollY === 0) setCurrentVideo(video);
        else setCurrentVideo(defaultVid);
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
                {videoList.map((item) => (
                    <HeroSectionTitle
                        key={item.title}
                        onHover={handleHover}
                        title={item.title}
                        year={item.releaseDate}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default HeroSection;
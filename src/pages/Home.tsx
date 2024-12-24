import Footer from "../components/Footer";
import Grid from "../components/Grid";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import ResponsiveMenu from "../components/ResponsiveMenu";
import '../MainStyle.css';


function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ResponsiveMenu />
            <Grid />
            <Footer />
        </div>
    );
}

export default Home;
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/AboutUs/AboutUs";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import ResponsiveMenu from "../components/ResponsiveMenu/ResponsiveMenu";
import '../MainStyle.css';


function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ResponsiveMenu />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default Home;
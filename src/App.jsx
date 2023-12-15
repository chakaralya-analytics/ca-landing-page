import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Element } from "react-scroll";
import InfoCard from "./components/cards/Card";
import PriceCard from "./components/cards/PriceCard";
import InformationCard from "./components/cards/InfoCard";
import FAQ from "./components/FAQ/Accordion";
import Footer from "./components/footer/footer";
import Landing from "./components/landing/Landing";

function App() {
    return (
        <>
            <Navbar />
            <Landing />
            <InfoCard />
            <PriceCard />
            <InformationCard />
            <FAQ />
            <Footer />
            {/* <Element id="home" className="section">
                <Fade direction="up"></Fade>
            </Element> */}
        </>
    );
}

export default App;

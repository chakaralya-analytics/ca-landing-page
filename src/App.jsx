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
            <Element id="home_scroll" className="section">
                <Landing />
            </Element>
            <Element id="services_scroll" className="section">
                <InfoCard />
            </Element>
            <Element id="pricing_scroll" className="section">
                <PriceCard />
            </Element>
            <Element id="about_scroll" className="section">
                <InformationCard />
            </Element>
            <Element id="faq_scroll" className="section">
                <FAQ />
            </Element>
            <Element id="contact_scroll" className="section">
                <Footer />
            </Element>
        </>
    );
}

export default App;

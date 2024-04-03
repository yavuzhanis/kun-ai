import './App.css'
import ButtonGradient from "./assets/svg/ButtonGradient";
import AIHeadlines from './components/AIHeadlines';
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import YoutubeVideo from './components/YoutubeVideo';

function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <AIHeadlines />
        <Services />
        <YoutubeVideo />
        <Roadmap />     
        <Footer />
      </div>
      <ButtonGradient />
    </>
)
}

export default App

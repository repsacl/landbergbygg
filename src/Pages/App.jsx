import { Link } from 'react-router-dom';
import ReavelText from '../Components/RevealText';

function App() {
  return (
    <>
      <section className="hero relative flex items-center justify-center h-screen bg-cover bg-center" 
               style={{ backgroundImage: "url('/hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

        <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
          <ReavelText className={"text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider"} DURATION={.5}>
            Landberg Bygg AS
          </ReavelText>

          <ReavelText DURATION={1.1}>
            <p className="text-lg md:text-2xl mb-10 font-light">
              Førsteklasses tømrerarbeid med tradisjonelt håndverk og moderne teknikker
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/kontakt"
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all ease-in-out duration-300 hover:bg-blue-700 hover:shadow-xl hover:translate-y-[-2px]"
              >
                Ta kontakt
              </Link>
              <Link
                to="/om"
                className="border border-white text-white font-semibold py-3 px-8 rounded-md transition-all ease-in-out duration-300 hover:bg-white/10"
              >
                Mer om oss
              </Link>
            </div>
          </ReavelText>
        </div>
      </section>
    </>
  );
}

export default App;
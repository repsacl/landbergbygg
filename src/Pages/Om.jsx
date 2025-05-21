import { Link } from 'react-router-dom';
import RevealText from '../Components/RevealText';
import { Helmet } from 'react-helmet';

import '../App.css';

function About() {
  return (
    <>
      <Helmet>
        <title>Om Landberg Bygg AS</title>
        <meta name="description" content="Landberg Bygg AS kombinerer tradisjonelt håndverk med moderne teknikker. Vi tilbyr renovering, rehabilitering, tilbygg og mye mer." />
      </Helmet>

      <section className="relative flex flex-col justify-center items-center min-h-screen bg-cover bg-center pt-24 pb-16"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        
        <RevealText className={"relative text-white text-center text-3xl md:text-6xl mb-12 uppercase font-bold tracking-wide"} DURATION={0.5}>
          Om Landberg Bygg AS
        </RevealText>

        <div className="relative w-11/12 md:w-3/4 lg:w-2/3 bg-white bg-opacity-95 p-8 md:p-12 rounded-lg shadow-2xl">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <RevealText className={"text-lg md:text-xl text-gray-800 leading-relaxed"} DURATION={1.1}>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">Tradisjon møter innovasjon</h2>
                
                <p className="mb-4">Hos <strong>Landberg Bygg AS</strong> er vi stolte av å tilby kvalitetsbevisst tømrerarbeid til våre kunder. Med flere års erfaring i bransjen og moderne løsninger, leverer vi skreddersydde løsninger som oppfyller dine behov og overgår dine forventninger.</p>
                
                <p className="mb-4">Vi tar på oss oppdrag som rehabilitering og renovering til mindre reparasjoner og vedlikehold. Vårt mål er å kombinere tradisjonelt håndverk med moderne teknikker for å sikre høy kvalitet og varige resultater.</p>
                
                <p>Uansett prosjektets størrelse eller kompleksitet, kan du stole på at vi leverer arbeid av høy standard, til avtalt tid og innenfor budsjett.</p>
                
                <div className="mt-8">
                  <Link to="/kontakt" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all ease-in-out duration-300 hover:bg-blue-700 inline-block">
                    Ta kontakt for befaring
                  </Link>
                </div>
              </RevealText>
            </div>
            
            <div className="md:col-span-2">
              <RevealText className="h-full flex flex-col justify-center" DURATION={1.3}>
                <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Våre tjenester:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Renovering og rehabilitering</li>
                    <li>Tilbygg og påbygg</li>
                    <li>Terrasser og uteplasser</li>
                    <li>Tak og fasadearbeid</li>
                    <li>Mindre reparasjoner</li>
                  </ul>
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
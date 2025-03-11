import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Landberg Bygg AS | Førsteklasses tømrerarbeid i Fredrikstad</title>
        <meta name="description" content="Landberg Bygg AS tilbyr førsteklasses tømrerarbeid med tradisjonelt håndverk og moderne teknikker i Fredrikstad. Spesialister på renovering, tilbygg og rehabilitering. Kontakt oss for befaring." />
      </Helmet>

      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center" 
                style={{ backgroundImage: "url('/hero-image.jpg')" }}>
          {/* Dark overlay with gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1.2 }}
          />

          {/* Content Container */}
          <div className="relative text-center text-white px-4 max-w-5xl mx-auto">
            {/* Title */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block">Landberg</span>{" "}
              <span className="inline-block">Bygg AS</span>
            </motion.h1>

            {/* Animated underline */}
            <motion.div 
              className="h-1 bg-blue-600 w-24 mx-auto mb-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: isLoaded ? 96 : 0, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-2xl mb-10 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Førsteklasses tømrerarbeid med tradisjonelt håndverk og moderne teknikker
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
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
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -10 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <motion.div className="w-1.5 h-3 bg-white rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Våre spesialområder</h2>
              <div className="h-1 bg-blue-600 w-24 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Renovering",
                  description: "Totalrenovering av hus og leiligheter med kvalitet i fokus.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: "Tilbygg",
                  description: "Skreddersydde løsninger for å utvide og forbedre ditt hjem.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )
                },
                {
                  title: "Uteplasser",
                  description: "Vakre terrasser og uteplasser som utvider ditt boareal.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  )
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to="/om" 
                    className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Les mer →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {/* <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <svg className="w-12 h-12 text-blue-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl font-light italic mb-8">
                "Landberg Bygg leverte kvalitetsarbeid på vårt tilbygg til avtalt tid og pris. Vi er svært fornøyde med resultatet og den profesjonelle tilnærmingen gjennom hele prosjektet."
              </blockquote>
              <div className="font-medium">
                <p className="text-xl">Erik Johansen</p>
                <p className="text-blue-300">Fredrikstad</p>
              </div>
            </motion.div>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Klar for å starte ditt neste prosjekt?</h2>
              <p className="text-lg text-gray-600 mb-8">Vi tilbyr uforpliktende befaring og rådgivning for å hjelpe deg med å realisere dine drømmer.</p>
              <Link
                to="/kontakt"
                className="inline-block bg-blue-600 text-white font-semibold py-4 px-10 rounded-md shadow-lg transition-all ease-in-out duration-300 hover:bg-blue-700 hover:shadow-xl hover:translate-y-[-2px]"
              >
                Ta kontakt for befaring
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
import RevealText from '../Components/RevealText';
import '../App.css';

function Contact() {
  return (
    <>
      <section className="relative flex flex-col justify-center items-center min-h-screen pt-24 pb-16"
        style={{ backgroundImage: "url('/contact-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        
        <RevealText className="relative text-white text-center text-4xl md:text-6xl uppercase font-bold mb-10" DURATION={0.5}>
          Kontakt oss
        </RevealText>

        <div className="relative w-11/12 md:w-4/5 lg:w-2/3 bg-white bg-opacity-95 p-8 md:p-12 rounded-lg shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10">
            <RevealText className="text-gray-800" DURATION={1.1}>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">Ta kontakt</h2>
              
              <p className="mb-6 text-lg">
                Ønsker du en uforpliktende befaring eller har spørsmål om våre tjenester? 
                Vi er her for å hjelpe deg med ditt byggeprosjekt.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-post</p>
                    <a href="mailto:post@landbergbygg.no" className="text-lg font-medium hover:text-blue-600 transition-colors">
                      post@landbergbygg.no
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <a href="tel:+4745911367" className="text-lg font-medium hover:text-blue-600 transition-colors">
                      +47 459 11 367
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Adresse</p>
                    <p className="text-lg font-medium">Fredrikstad, Norge</p>
                  </div>
                </div>
              </div>
            </RevealText>
            
            <RevealText DURATION={1.3}>
              <form className="bg-gray-50 p-6 rounded-lg shadow-inner">
                <h3 className="text-xl font-bold text-blue-800 mb-6">Send oss en melding</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Navn</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-post</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Melding</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-md transition-all ease-in-out duration-300 hover:bg-blue-700">
                    Send melding
                  </button>
                </div>
              </form>
            </RevealText>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
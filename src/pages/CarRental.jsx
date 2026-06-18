import Header from "../components/Header";
import Footer from "../components/Footer";
export default function CarRental(){
    return( 
        <>
        <Header/>
        <section className="bg-[#003B95] text-white py-20">
         <div className="max-w-6xl mx-auto px-6">   
              <h1 className="text-6xl font-bold mb-4">
                Book your car rental
              </h1>
              <p className="text-xl mb-10">     
                Easy car rentals for your travel needs
              </p>
            </div>
        </section>
        <Footer/>   
        </>
        );
    }
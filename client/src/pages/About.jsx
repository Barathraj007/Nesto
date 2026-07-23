import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-16 px-6">

        <h1 className="text-5xl font-bold text-center mb-8">
          About Nesto
        </h1>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Nesto is a modern real estate platform that helps people buy,
          sell and rent properties quickly and securely. Our goal is to
          connect property owners with buyers and tenants through a simple,
          reliable and user-friendly experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              🎯 Our Mission
            </h2>

            <p className="text-gray-600">
              To make property buying, selling and renting simple,
              transparent and accessible for everyone.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Our Vision
            </h2>

            <p className="text-gray-600">
              To become one of India's most trusted online real estate
              platforms with secure and verified property listings.
            </p>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;
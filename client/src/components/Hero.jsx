import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full font-semibold shadow-lg">
              🏆 India's Trusted Property Marketplace
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight">
              Find Your
              <span className="text-yellow-300">
                {" "}Dream Home
              </span>
              <br />
              With Nesto
            </h1>

            <p className="mt-8 text-xl text-blue-100 leading-9 max-w-xl">
              Buy, Sell and Rent verified properties across India.
              Discover apartments, villas, houses, commercial
              buildings and luxury homes from trusted owners.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">

              <Link
                to="/"
                className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
              >
                🏠 Browse Properties
              </Link>

              <Link
                to="/add-property"
                className="border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition"
              >
                ➕ Sell Property
              </Link>

            </div>

          </div>

          {/* Right Side */}
          <div>

            <div className="bg-white/95 backdrop-blur-xl rounded-[35px] p-5 shadow-2xl">

              <img
                src="/images/hero-house.jpg"
                alt="Luxury Home"
                className="rounded-[28px] h-[430px] w-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200";
                }}
              />

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center">

            <h2 className="text-5xl font-bold">
              25K+
            </h2>

            <p className="mt-3 text-blue-100">
              Properties
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center">

            <h2 className="text-5xl font-bold">
              150+
            </h2>

            <p className="mt-3 text-blue-100">
              Cities
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center">

            <h2 className="text-5xl font-bold">
              10K+
            </h2>

            <p className="mt-3 text-blue-100">
              Happy Buyers
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center">

            <h2 className="text-5xl font-bold">
              99%
            </h2>

            <p className="mt-3 text-blue-100">
              Satisfaction
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
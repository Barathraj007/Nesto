import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-extrabold text-blue-400">
              🏠 Nesto
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Nesto is your trusted real estate platform for buying,
              selling and renting verified properties across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>

              <Link to="/" className="hover:text-blue-400">
                Properties
              </Link>

              <Link to="/add-property" className="hover:text-blue-400">
                Sell Property
              </Link>

              <Link to="/dashboard" className="hover:text-blue-400">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Villupuram, Tamil Nadu</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-green-500" />
                <a href="tel:+919487242879">
                  +91 9487242879
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <a href="mailto:barathbuilds@gmail.com">
                  barathbuilds@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-3xl">

              <a
                href="https://www.instagram.com/barath_builds?igsh=Mmk1eWdzbms5MHVn"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-pink-500 hover:scale-110 duration-300" />
              </a>

              <a
                href="https://wa.me/919487242879"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-green-500 hover:scale-110 duration-300" />
              </a>

            </div>
          </div>

        </div>

        <hr className="border-slate-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400">
            © {new Date().getFullYear()} Nesto. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-400">

            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
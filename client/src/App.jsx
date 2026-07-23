import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import FeaturedProperties from "./components/FeaturedProperties";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProperty from "./pages/AddProperty";
import Dashboard from "./pages/Dashboard";
import EditProperty from "./pages/EditProperty";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";

// NEW PAGES
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import About from "./pages/About";

function Home({ search, setSearch }) {
  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FeaturedProperties
        search={search}
      />

      <WhyChooseUs />

      <Testimonials />

      <Footer />
    </>
  );
}

function App() {
  const [search, setSearch] = useState({
    location: "",
    type: "",
    status: "",
    bedrooms: "",
    budget: "",
  });

  return (
    <Routes>

      <Route
        path="/"
        element={
          <Home
            search={search}
            setSearch={setSearch}
          />
        }
      />

      <Route
        path="/buy"
        element={<Buy />}
      />

      <Route
        path="/rent"
        element={<Rent />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/property/:id"
        element={<PropertyDetails />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/add-property"
        element={<AddProperty />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/edit-property/:id"
        element={<EditProperty />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/wishlist"
        element={<Wishlist />}
      />

    </Routes>
  );
}

export default App;
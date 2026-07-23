function SearchBar({ search, setSearch }) {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-20">
      <div className="grid md:grid-cols-6 gap-4">

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          value={search.location}
          onChange={(e) =>
            setSearch({
              ...search,
              location: e.target.value,
            })
          }
          className="border p-3 rounded-lg"
        />

        {/* Property Type */}
        <select
          value={search.type}
          onChange={(e) =>
            setSearch({
              ...search,
              type: e.target.value,
            })
          }
          className="border p-3 rounded-lg"
        >
          <option value="">Property Type</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Commercial">Commercial</option>
          <option value="Office">Office</option>
          <option value="Land">Land</option>
        </select>

        {/* Status */}
        <select
          value={search.status}
          onChange={(e) =>
            setSearch({
              ...search,
              status: e.target.value,
            })
          }
          className="border p-3 rounded-lg"
        >
          <option value="">Status</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
          <option value="Sold">Sold</option>
        </select>

        {/* Bedrooms */}
        <select
          value={search.bedrooms}
          onChange={(e) =>
            setSearch({
              ...search,
              bedrooms: e.target.value,
            })
          }
          className="border p-3 rounded-lg"
        >
          <option value="">Bedrooms</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4+ BHK</option>
        </select>

        {/* Budget */}
        <select
          value={search.price}
          onChange={(e) =>
            setSearch({
              ...search,
              price: e.target.value,
            })
          }
          className="border p-3 rounded-lg"
        >
          <option value="">Budget</option>
          <option value="500000">₹5 Lakh</option>
          <option value="1000000">₹10 Lakh</option>
          <option value="2500000">₹25 Lakh</option>
          <option value="5000000">₹50 Lakh</option>
          <option value="10000000">₹1 Crore</option>
          <option value="999999999">Above ₹1 Crore</option>
        </select>

        {/* Search Button */}
        <button className="bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
          🔍 Search
        </button>

      </div>
    </section>
  );
}

export default SearchBar;
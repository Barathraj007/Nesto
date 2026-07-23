import { useEffect, useState } from "react";
import { getProperties } from "../api/propertyApi";
import PropertyCard from "./PropertyCard";

function FeaturedProperties({ search }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await getProperties();
      setProperties(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredProperties = properties.filter((property) => {
  const matchLocation =
    search.location === "" ||
    property.location
      ?.toLowerCase()
      .includes(search.location.toLowerCase());

  const matchType =
    search.type === "" ||
    property.type === search.type;

  const matchStatus =
    !search.status ||
    property.status === search.status;

  const matchBedrooms =
    !search.bedrooms ||
    Number(property.bedrooms) === Number(search.bedrooms);

  const matchBudget =
    search.budget === "" ||
    (search.budget === "10000" && Number(property.price) <= 10000) ||
    (search.budget === "20000" &&
      Number(property.price) > 10000 &&
      Number(property.price) <= 20000) ||
    (search.budget === "999999" &&
      Number(property.price) > 20000);

  return (
    matchLocation &&
    matchType &&
    matchStatus &&
    matchBedrooms &&
    matchBudget
  );
});

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            Premium Collection
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Featured Properties
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Find premium apartments, villas, offices and commercial
            properties from trusted owners.
          </p>

        </div>

        {/* Loading */}

        {loading ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">
              Loading Properties...
            </h2>
          </div>
        ) : filteredProperties.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg py-20 text-center">

            <div className="text-7xl mb-4">
              🏠
            </div>

            <h2 className="text-3xl font-bold">
              No Properties Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try changing your search filters.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {filteredProperties.map((property) => (

              <PropertyCard
                key={property._id}
                property={property}
              />

            ))}

          </div>

        )}

      </div>
    </section>
  );
}

export default FeaturedProperties;
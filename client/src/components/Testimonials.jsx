function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Home Buyer",
      image: "👨",
      rating: "★★★★★",
      review:
        "Nesto helped me find my dream apartment in just a few days. The process was smooth and completely transparent.",
    },
    {
      name: "Priya Nair",
      role: "Property Seller",
      image: "👩",
      rating: "★★★★★",
      review:
        "Listing my property was incredibly easy. I received genuine buyer inquiries within the first week.",
    },
    {
      name: "Arjun Kumar",
      role: "Investor",
      image: "🧑",
      rating: "★★★★★",
      review:
        "The premium property listings and verified owners gave me confidence while investing in real estate.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">
            ⭐ Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-6">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
            Thousands of people trust Nesto to buy, sell and rent properties across India.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border"
            >

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                  {item.image}
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>

              <div className="text-yellow-500 text-xl mt-6">
                {item.rating}
              </div>

              <p className="text-gray-600 mt-5 leading-8">
                "{item.review}"
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;
function WhyChooseUs() {
  const features = [
    {
      icon: "🏠",
      title: "Verified Properties",
      description:
        "Every property is verified before listing to ensure trust and authenticity.",
    },
    {
      icon: "💰",
      title: "Best Price",
      description:
        "Compare thousands of listings and get the best value for your budget.",
    },
    {
      icon: "🛡️",
      title: "Safe Transactions",
      description:
        "Secure communication between buyers and property owners.",
    },
    {
      icon: "⚡",
      title: "Fast Search",
      description:
        "Find your dream property instantly using smart search and filters.",
    },
    {
      icon: "🤝",
      title: "Trusted Owners",
      description:
        "Connect directly with verified owners and avoid fake listings.",
    },
    {
      icon: "📍",
      title: "Multiple Cities",
      description:
        "Explore premium apartments, villas and commercial properties across India.",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            Why Choose Nesto?
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Your Trusted Real Estate Partner
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
            We make buying, selling and renting properties easy,
            secure and transparent for everyone.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 border"
            >

              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-8">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;
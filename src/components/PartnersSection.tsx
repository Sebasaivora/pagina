
const PartnersSection = () => {
  const partners = [
    "Veterinary University Institute",
    "Global Animal Research Foundation",
    "Wildlife Conservation Society",
    "International Zoo Association",
    "Animal Health Organization",
    "Biodiversity Research Center"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-deep-teal mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Collaborating with leading institutions to advance animal education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-lime-green hover:text-white transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <h3 className="font-semibold text-lg">{partner}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;


const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          GUIAVETEXO
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in">
          Your comprehensive educational resource for animal species knowledge
        </p>
        <div className="animate-fade-in">
          <a
            href="#categories"
            className="inline-block bg-lime-green text-deep-teal px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-green/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Categories
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

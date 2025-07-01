
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const CategoriesSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const categories = [
    {
      name: "Mammals",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subcategories: ["Primates", "Carnivores", "Herbivores", "Marine Mammals", "Bats", "Rodents", "Marsupials", "Ungulates"]
    },
    {
      name: "Reptiles",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subcategories: ["Snakes", "Lizards", "Turtles", "Crocodiles", "Tuatara", "Geckos", "Iguanas", "Chameleons"]
    },
    {
      name: "Birds",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subcategories: ["Raptors", "Songbirds", "Waterbirds", "Game Birds", "Parrots", "Owls", "Hummingbirds", "Seabirds"]
    },
    {
      name: "Fish",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subcategories: ["Freshwater", "Saltwater", "Tropical", "Cold Water", "Sharks", "Rays", "Eels", "Coral Fish"]
    },
    {
      name: "Amphibians",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subcategories: ["Frogs", "Toads", "Salamanders", "Newts", "Caecilians", "Tree Frogs", "Poison Frogs", "Aquatic"]
    }
  ];

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-deep-teal mb-4">Animal Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive collection of animal species organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="relative h-48 bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url(${category.image})` }}
                onClick={() => toggleCategory(index)}
              >
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
                <button className="absolute bottom-4 right-4 bg-lime-green text-deep-teal p-2 rounded-full hover:bg-lime-green/80 transition-colors">
                  {expandedCategory === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              {expandedCategory === index && (
                <div className="p-6 animate-fade-in">
                  <h4 className="text-lg font-semibold text-deep-teal mb-4">Subcategories:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.subcategories.map((sub) => (
                      <div
                        key={sub}
                        className="bg-gray-100 px-3 py-2 rounded-lg text-sm text-deep-teal hover:bg-lime-green hover:text-white transition-colors cursor-pointer"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

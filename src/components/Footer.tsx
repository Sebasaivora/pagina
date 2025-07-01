
const Footer = () => {
  return (
    <footer className="bg-deep-teal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">GUIAVETEXO</h3>
            <p className="text-gray-300 mb-4">
              Your comprehensive educational resource for animal species knowledge, 
              supporting veterinary students, educators, and animal enthusiasts worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-lime-green transition-colors">Home</a></li>
              <li><a href="#categories" className="text-gray-300 hover:text-lime-green transition-colors">Categories</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-lime-green transition-colors">About</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-lime-green transition-colors">Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@guiavetexo.edu</li>
              <li>+1 (555) 123-4567</li>
              <li>Educational Plaza, Suite 100</li>
              <li>University District</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 GUIAVETEXO. All rights reserved. Educational use only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

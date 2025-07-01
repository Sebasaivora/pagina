
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest updates about animal education.",
      });
      setName("");
      setEmail("");
    } else {
      toast({
        title: "Please fill in all fields",
        description: "Both name and email are required.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-deep-teal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-xl text-gray-300 mb-12">
          Subscribe to our newsletter for the latest educational content and updates
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
          />
          <Button
            type="submit"
            className="w-full bg-lime-green text-deep-teal hover:bg-lime-green/90 font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Subscribe Now
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;

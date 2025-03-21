
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Clover, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 opacity-10">
        <Clover size={250} className="text-eco-600 transform -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-eco-600 bg-eco-50 px-3 py-1 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in-delay-1">
            Contact Us
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70 opacity-0 animate-fade-in-delay-2">
            Ready to start your journey towards environmental sustainability? Reach out to our team of experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in-right">
            <div className="glass rounded-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Clover size={24} className="text-eco-600 mr-2" />
                <span>Let's Connect</span>
              </h3>
              
              <p className="text-foreground/70 mb-8">
                Have questions or ready to discuss your environmental needs? Fill out the form and our team will be in touch shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-eco-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-foreground/70">info@ecoconsult.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-eco-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-foreground/70">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-eco-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Visit Us</h4>
                    <p className="text-foreground/70">123 Eco Drive, Green City, EC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-left">
            <form onSubmit={handleSubmit} className="glass rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:border-eco-600 focus:ring focus:ring-eco-600/20 focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:border-eco-600 focus:ring focus:ring-eco-600/20 focus:outline-none transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:border-eco-600 focus:ring focus:ring-eco-600/20 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-3 bg-eco-600 text-white rounded-full font-medium hover:bg-eco-700 transition-all duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>Processing<span className="ml-2 animate-pulse">...</span></>
                  ) : (
                    <>Send Message <Send size={18} className="ml-2" /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

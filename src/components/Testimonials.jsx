import React from 'react';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: 'John Doe, CEO of TechCorp',
    avatar: null,
    rating: 5,
    quote: "Tim's expertise in privacy law was instrumental in our company's compliance efforts. His advice was clear, concise, and incredibly valuable. Highly recommended.",
  },
  {
    name: 'Jane Smith, Founder of Innovate Inc.',
    avatar: null,
    rating: 5,
    quote: "The legal guidance we received for our intellectual property was top-notch. Tim is a true professional who understands the needs of a growing tech startup.",
  },
  {
    name: 'Sam Wilson, Small Business Owner',
    avatar: null,
    rating: 5,
    quote: "As a small business owner, navigating legal challenges can be daunting. Tim provided us with the confidence and legal strategy to move forward successfully.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from satisfied clients who trust our legal expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full rounded-full" />
                  ) : (
                    <User className="w-6 h-6 text-gray-500" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

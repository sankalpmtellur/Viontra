import React from 'react';
import { Star, Quote, Plane, Truck, Ship, Globe } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Vietjet Air',
      logo: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Air Freight',
      description: 'Leading airline partner for express air freight between India and Vietnam'
    },
    {
      name: 'VRL Logistics',
      logo: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Land Transport',
      description: 'Trusted land transportation partner across India and Southeast Asia'
    },
    {
      name: 'Maersk Line',
      logo: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Sea Freight',
      description: 'Global ocean freight partner for container shipping'
    },
    {
      name: 'DHL Express',
      logo: 'https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Express Delivery',
      description: 'Last-mile delivery partner for time-sensitive shipments'
    },
    {
      name: 'India Post',
      logo: 'https://images.pexels.com/photos/127905/pexels-photo-127905.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Postal Network',
      description: 'Government postal partner for domestic distribution'
    },
    {
      name: 'Vietnam Post',
      logo: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Postal Network',
      description: 'National postal service partner in Vietnam'
    }
  ];

  const testimonials = [
    {
      company: 'TechNova Electronics',
      person: 'Amit Sharma',
      role: 'Supply Chain Director',
      content: 'Viontra transformed our logistics operations. We reduced delivery times by 40% and costs by 25%. Their AI platform is incredibly accurate with ETAs.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      company: 'Vietnam Fashion Exports',
      person: 'Tran Le Minh',
      role: 'Operations Manager',
      content: 'The seamless integration of multiple transport modes is brilliant. We can now offer same-week delivery to India, which was impossible before.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      company: 'Global Trade Solutions',
      person: 'Priya Verma',
      role: 'CEO',
      content: 'Real-time tracking and transparent pricing make Viontra stand out. Our clients love the visibility into their shipments. Highly recommended!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#0077B6] to-[#F76C1B] bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic partnerships with industry leaders ensure reliable, efficient logistics worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {partners.map((partner, index) => (
            <Card key={index} hover className="p-6">
              <div className="h-32 rounded-xl overflow-hidden mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="inline-block px-3 py-1 bg-[#0077B6]/10 text-[#0077B6] text-xs font-semibold rounded-full mb-3">
                {partner.category}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-3xl p-8 md:p-12 text-white text-center mb-20">
          <Globe className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our network of global logistics partners and expand your reach across India and Vietnam
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0077B6]">
              Partnership Opportunities
            </Button>
            <Button size="lg" variant="secondary">
              Contact Our Team
            </Button>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <Quote className="w-12 h-12 text-[#F76C1B] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by hundreds of businesses across India and Vietnam
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F76C1B] text-[#F76C1B]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#0077B6]/20">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.person}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.person}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-[#0077B6] font-semibold">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="w-16 h-16 bg-gradient-to-br from-[#0077B6] to-[#F76C1B] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">12+</div>
            <div className="text-gray-600">Airline Partners</div>
          </div>
          <div>
            <div className="w-16 h-16 bg-gradient-to-br from-[#0077B6] to-[#F76C1B] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">45+</div>
            <div className="text-gray-600">Land Transport</div>
          </div>
          <div>
            <div className="w-16 h-16 bg-gradient-to-br from-[#0077B6] to-[#F76C1B] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Ship className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
            <div className="text-gray-600">Shipping Lines</div>
          </div>
          <div>
            <div className="w-16 h-16 bg-gradient-to-br from-[#0077B6] to-[#F76C1B] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Total Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

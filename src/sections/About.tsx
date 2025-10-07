import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';
import { Card } from '../components/Card';

export const About: React.FC = () => {
  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Co-Founder',
      bio: 'Former logistics director with 15+ years in supply chain optimization',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Nguyen Thi Mai',
      role: 'CTO & Co-Founder',
      bio: 'AI/ML expert specializing in predictive logistics and route optimization',
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Arjun Patel',
      role: 'COO & Co-Founder',
      bio: 'Operations specialist with expertise in multi-modal transportation',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver speed, transparency, and smart logistics solutions that empower businesses to reach global markets effortlessly.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To connect every business to global markets through seamless, AI-powered logistics that make distance irrelevant.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Innovation, reliability, and customer success drive everything we do. We believe in building lasting partnerships.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-[#0077B6] to-[#F76C1B] bg-clip-text text-transparent">Viontra</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing logistics between India and Vietnam through AI-powered technology and multi-modal transportation
          </p>
        </div>

        <div className="mb-20">
          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2023, Viontra emerged from a simple observation: logistics between India and Vietnam was fragmented,
                    expensive, and opaque. Businesses struggled with multiple vendors, unpredictable delivery times, and hidden costs.
                  </p>
                  <p>
                    We set out to change that. By leveraging cutting-edge AI technology and forging strategic partnerships with
                    leading carriers like Vietjet and VRL, we created a unified platform that makes international shipping as
                    simple as ordering online.
                  </p>
                  <p>
                    Today, Viontra handles thousands of shipments monthly, connecting exporters, SMEs, and e-commerce players
                    across two of Asia's fastest-growing economies. Our AI-powered platform optimizes routes, predicts delays,
                    and reduces costs by up to 30%.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Logistics Operations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#0077B6] to-[#F76C1B] rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm">Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card key={index} hover className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0077B6] to-[#F76C1B] rounded-xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>

        <div>
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-[#0077B6] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A diverse team of logistics experts, technologists, and entrepreneurs committed to transforming global trade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-[#0077B6]/20">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-[#0077B6] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

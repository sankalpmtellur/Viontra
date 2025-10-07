import React from 'react';
import { Plane, Truck, Ship, Cpu, Zap, DollarSign, BarChart3, Clock, Shield } from 'lucide-react';
import { Card } from '../components/Card';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Express delivery via our Vietjet partnership. Perfect for time-sensitive shipments.',
      features: ['48-72 hour delivery', 'Real-time tracking', 'Priority handling', 'Door-to-door service'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Truck,
      title: 'Land Transport',
      description: 'Cost-effective overland shipping through VRL and regional partners.',
      features: ['7-10 day delivery', 'Bulk cargo support', 'Multi-stop routes', 'Secure handling'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Ship,
      title: 'Sea Freight',
      description: 'Economical ocean freight for large volumes and non-urgent shipments.',
      features: ['15-25 day delivery', 'Container shipping', 'FCL & LCL options', 'Port clearance'],
      gradient: 'from-teal-500 to-blue-600'
    },
    {
      icon: Cpu,
      title: 'Multi-Modal AI Platform',
      description: 'Intelligent logistics orchestration combining air, land, and sea for optimal efficiency.',
      features: ['AI route optimization', 'Cost prediction', 'Delay forecasting', 'Smart recommendations'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const platformFeatures = [
    {
      icon: Zap,
      title: 'Real-Time Tracking',
      description: 'Track every shipment with GPS-enabled updates and predictive ETAs'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'AI analyzes routes to reduce costs by up to 30% compared to traditional methods'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into shipping patterns, costs, and performance metrics'
    },
    {
      icon: Clock,
      title: 'Demand Forecasting',
      description: 'Predictive AI helps plan capacity and avoid peak season bottlenecks'
    },
    {
      icon: Shield,
      title: 'Insurance & Security',
      description: 'Comprehensive cargo insurance and secure handling at every step'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#0077B6] to-[#F76C1B] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions powered by AI and strategic partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} hover className="p-8 group">
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#0077B6] to-[#F76C1B] rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Platform Features</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform goes beyond traditional logistics, offering intelligent insights and automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <feature.icon className="w-10 h-10 text-[#F76C1B] mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Why Choose Viontra?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We combine cutting-edge technology with reliable partnerships to deliver unmatched logistics solutions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">99.2%</div>
              <div className="text-sm opacity-90">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="text-sm opacity-90">Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Active Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

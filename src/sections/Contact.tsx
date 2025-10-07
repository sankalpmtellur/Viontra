import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input, TextArea } from '../components/Input';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const offices = [
    {
      city: 'Bengaluru',
      country: 'India',
      address: '123 Tech Park, Electronic City, Bengaluru 560100, Karnataka, India',
      phone: '+91 80 1234 5678',
      email: 'india@viontra.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM IST'
    },
    {
      city: 'Ho Chi Minh City',
      country: 'Vietnam',
      address: '456 Nguyen Hue Boulevard, District 1, Ho Chi Minh City, Vietnam',
      phone: '+84 28 3822 1234',
      email: 'vietnam@viontra.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM ICT'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-[#0077B6] to-[#F76C1B] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to our team anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <Input
                  label="Company Name"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
                <TextArea
                  label="Message"
                  placeholder="Tell us about your logistics needs..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <Button type="submit" className="w-full" size="lg">
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            )}
          </Card>

          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0077B6] to-[#F76C1B] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">contact@viontra.com</p>
                    <p className="text-gray-600">support@viontra.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0077B6] to-[#F76C1B] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">India: +91 80 1234 5678</p>
                    <p className="text-gray-600">Vietnam: +84 28 3822 1234</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0077B6] to-[#F76C1B] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Visit Us</h4>
                    <p className="text-gray-600">Offices in Bengaluru & Ho Chi Minh City</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] text-white">
              <h4 className="font-bold text-lg mb-3">24/7 Customer Support</h4>
              <p className="text-white/90 mb-4">
                Need immediate assistance? Our support team is available around the clock to help with your shipments.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0077B6]">
                Live Chat Support
              </Button>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <Card key={index} className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {office.city}, {office.country}
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#0077B6]" />
                  <span>{office.address}</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-[#0077B6]" />
                  <span>{office.phone}</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-[#0077B6]" />
                  <span>{office.email}</span>
                </p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-700">Office Hours</p>
                  <p className="text-sm">{office.hours}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085284797142!3d12.953945614009874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635789234567!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Office Location"
          />
        </div>
      </div>
    </section>
  );
};

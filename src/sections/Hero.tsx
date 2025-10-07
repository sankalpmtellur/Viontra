import React, { useState } from 'react';
import { Plane, Truck, Ship, Search, TrendingUp, Clock, Shield } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';

interface HeroProps {
  onBooking: () => void;
  onTrack: (trackingNumber: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onBooking, onTrack }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      onTrack(trackingNumber.trim());
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0077B6] via-[#0096C7] to-[#00B4D8] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F76C1B] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800">
          <path
            d="M 100,400 Q 300,200 600,400 T 1100,400"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
            className="animate-dashMove"
          />
          <circle cx="100" cy="400" r="8" fill="white" className="animate-pulse" />
          <circle cx="600" cy="400" r="8" fill="white" className="animate-pulse delay-500" />
          <circle cx="1100" cy="400" r="8" fill="white" className="animate-pulse delay-1000" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-12">
          <div className="flex justify-center space-x-4 mb-8 animate-fadeIn">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center animate-float">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center animate-float delay-200">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center animate-float delay-400">
              <Ship className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeIn">
            Connecting the World,
            <br />
            <span className="bg-gradient-to-r from-white to-[#F76C1B] bg-clip-text text-transparent">
              Mile by Mile
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fadeIn delay-200">
            AI-powered end-to-end logistics connecting India and Vietnam through air, land, and sea.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-fadeIn delay-400">
            <Button size="lg" variant="secondary" onClick={onBooking}>
              Book Your Shipment
            </Button>
            <Button size="lg" variant="outlineOnDark">
              Watch Demo
            </Button>
          </div>

          <div className="max-w-2xl mx-auto animate-fadeIn delay-600">
            <form onSubmit={handleTrackSubmit} className="relative">
              <Input
                type="text"
                placeholder="Enter tracking number (e.g., VTR-2025A1847)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="pr-12 h-14 text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#0077B6] text-white p-3 rounded-lg hover:bg-[#005a8c] transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
            <p className="text-white/80 text-sm mt-2">
              Track your shipment in real-time with AI-powered updates
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fadeIn delay-800">
          <Card glass className="text-center">
            <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">99.2%</h3>
            <p className="text-white/80">On-Time Delivery Rate</p>
          </Card>

          <Card glass className="text-center">
            <Clock className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">48 Hours</h3>
            <p className="text-white/80">Average Air Freight Time</p>
          </Card>

          <Card glass className="text-center">
            <Shield className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
            <p className="text-white/80">Real-Time Tracking Support</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

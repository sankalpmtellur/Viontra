import React, { useState } from 'react';
import { Package, MapPin, Clock, CheckCircle, TrendingUp, DollarSign, Leaf, Navigation } from 'lucide-react';
import { Card } from '../components/Card';

interface TrackingProps {
  initialTrackingNumber?: string;
}

export const Tracking: React.FC<TrackingProps> = ({ initialTrackingNumber }) => {
  const [trackingNumber, setTrackingNumber] = useState(initialTrackingNumber || '');
  const [shipment, setShipment] = useState<any>(null);

  const mockShipments: Record<string, any> = {
    'VTR-2025A1847': {
      tracking_number: 'VTR-2025A1847',
      shipper_name: 'TechCorp India',
      origin: 'Mumbai, India',
      destination: 'Ho Chi Minh City, Vietnam',
      shipment_type: 'air',
      status: 'in_transit',
      progress: 65,
      current_location: 'Bangkok Hub',
      estimated_delivery: '2 days',
      cost: 2850,
      weight: 450.5,
      timeline: [
        { status: 'picked_up', location: 'Mumbai', date: '2025-10-05', time: '10:30 AM', completed: true },
        { status: 'in_transit', location: 'Delhi Hub', date: '2025-10-05', time: '04:15 PM', completed: true },
        { status: 'customs', location: 'Bangkok Hub', date: '2025-10-06', time: '11:20 AM', completed: true },
        { status: 'in_transit', location: 'Bangkok Hub', date: '2025-10-07', time: '09:00 AM', completed: false },
        { status: 'out_for_delivery', location: 'Ho Chi Minh City', date: '2025-10-08', time: 'Expected', completed: false },
        { status: 'delivered', location: 'Ho Chi Minh City', date: '2025-10-09', time: 'Expected', completed: false }
      ]
    },
    'VTR-2025L2934': {
      tracking_number: 'VTR-2025L2934',
      shipper_name: 'Global Exports Ltd',
      origin: 'Bangalore, India',
      destination: 'Hanoi, Vietnam',
      shipment_type: 'land',
      status: 'in_transit',
      progress: 45,
      current_location: 'Crossing Myanmar Border',
      estimated_delivery: '7 days',
      cost: 1650,
      weight: 1200,
      timeline: [
        { status: 'picked_up', location: 'Bangalore', date: '2025-10-03', time: '08:00 AM', completed: true },
        { status: 'in_transit', location: 'Chennai', date: '2025-10-04', time: '02:30 PM', completed: true },
        { status: 'border_crossing', location: 'Myanmar Border', date: '2025-10-07', time: '10:00 AM', completed: false },
        { status: 'in_transit', location: 'Mandalay', date: '2025-10-10', time: 'Expected', completed: false },
        { status: 'delivered', location: 'Hanoi', date: '2025-10-14', time: 'Expected', completed: false }
      ]
    },
    'VTR-2025S4521': {
      tracking_number: 'VTR-2025S4521',
      shipper_name: 'Marine Traders',
      origin: 'Chennai, India',
      destination: 'Da Nang, Vietnam',
      shipment_type: 'sea',
      status: 'customs',
      progress: 80,
      current_location: 'Da Nang Port',
      estimated_delivery: '12 days',
      cost: 3200,
      weight: 5000,
      timeline: [
        { status: 'picked_up', location: 'Chennai', date: '2025-09-20', time: '09:00 AM', completed: true },
        { status: 'port_departure', location: 'Chennai Port', date: '2025-09-22', time: '06:00 PM', completed: true },
        { status: 'at_sea', location: 'Bay of Bengal', date: '2025-09-25', time: '12:00 PM', completed: true },
        { status: 'port_arrival', location: 'Da Nang Port', date: '2025-10-05', time: '08:00 AM', completed: true },
        { status: 'customs', location: 'Da Nang Port', date: '2025-10-07', time: '10:00 AM', completed: false },
        { status: 'delivered', location: 'Da Nang', date: '2025-10-19', time: 'Expected', completed: false }
      ]
    }
  };

  const handleSearch = () => {
    const found = mockShipments[trackingNumber.toUpperCase()];
    if (found) {
      setShipment(found);
    } else {
      alert('Shipment not found. Try: VTR-2025A1847, VTR-2025L2934, or VTR-2025S4521');
    }
  };

  const analytics = {
    totalShipments: 3542,
    onTimeRate: 99.2,
    avgCost: 2100,
    co2Saved: 125000,
    milesConnected: 8500000
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Track & <span className="bg-gradient-to-r from-[#0077B6] to-[#F76C1B] bg-clip-text text-transparent">Analytics</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real-time shipment tracking and comprehensive logistics analytics
          </p>
        </div>

        <Card className="p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Track Your Shipment</h3>
          <div className="flex space-x-4">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter tracking number (e.g., VTR-2025A1847)"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="px-8 py-3 bg-gradient-to-r from-[#0077B6] to-[#0096C7] text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Track
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Try these tracking numbers: VTR-2025A1847, VTR-2025L2934, VTR-2025S4521
          </p>
        </Card>

        {shipment && (
          <div className="space-y-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] text-white">
                <Package className="w-10 h-10 mb-4" />
                <div className="text-3xl font-bold mb-2">{shipment.tracking_number}</div>
                <div className="text-sm opacity-90 capitalize">{shipment.shipment_type} Freight</div>
              </Card>

              <Card className="bg-gradient-to-br from-[#F76C1B] to-[#FF8C42] text-white">
                <Clock className="w-10 h-10 mb-4" />
                <div className="text-3xl font-bold mb-2">{shipment.estimated_delivery}</div>
                <div className="text-sm opacity-90">Estimated Delivery</div>
              </Card>

              <Card className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
                <MapPin className="w-10 h-10 mb-4" />
                <div className="text-xl font-bold mb-2">{shipment.current_location}</div>
                <div className="text-sm opacity-90">Current Location</div>
              </Card>
            </div>

            <Card className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Shipment Progress</h3>
                <span className="text-2xl font-bold text-[#0077B6]">{shipment.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
                <div
                  className="bg-gradient-to-r from-[#0077B6] to-[#F76C1B] h-4 rounded-full transition-all duration-500"
                  style={{ width: `${shipment.progress}%` }}
                />
              </div>

              <div className="space-y-6">
                {shipment.timeline.map((event: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      event.completed ? 'bg-gradient-to-r from-[#0077B6] to-[#F76C1B]' : 'bg-gray-200'
                    }`}>
                      {event.completed ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <div className="w-4 h-4 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-bold capitalize ${event.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                          {event.status.replace('_', ' ')}
                        </h4>
                        <span className={`text-sm ${event.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                          {event.date}
                        </span>
                      </div>
                      <p className={`text-sm ${event.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                        {event.location} • {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <div className="text-sm text-gray-600 mb-1">Shipper</div>
                <div className="font-bold text-gray-900">{shipment.shipper_name}</div>
              </Card>
              <Card>
                <div className="text-sm text-gray-600 mb-1">Weight</div>
                <div className="font-bold text-gray-900">{shipment.weight} kg</div>
              </Card>
              <Card>
                <div className="text-sm text-gray-600 mb-1">Cost</div>
                <div className="font-bold text-gray-900">${shipment.cost}</div>
              </Card>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Platform Analytics</h3>

          <div className="grid md:grid-cols-5 gap-6 mb-8">
            <Card glass className="text-center">
              <TrendingUp className="w-10 h-10 text-[#F76C1B] mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{analytics.totalShipments.toLocaleString()}</div>
              <div className="text-sm text-white/80">Total Shipments</div>
            </Card>

            <Card glass className="text-center">
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{analytics.onTimeRate}%</div>
              <div className="text-sm text-white/80">On-Time Deliveries</div>
            </Card>

            <Card glass className="text-center">
              <DollarSign className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">${analytics.avgCost}</div>
              <div className="text-sm text-white/80">Avg Cost per Shipment</div>
            </Card>

            <Card glass className="text-center">
              <Leaf className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{(analytics.co2Saved / 1000).toFixed(0)}t</div>
              <div className="text-sm text-white/80">CO₂ Saved</div>
            </Card>

            <Card glass className="text-center">
              <Navigation className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{(analytics.milesConnected / 1000000).toFixed(1)}M</div>
              <div className="text-sm text-white/80">Miles Connected</div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card glass>
              <h4 className="font-bold text-lg mb-4">Weekly Shipment Volume</h4>
              <div className="space-y-3">
                {[
                  { day: 'Mon', value: 85 },
                  { day: 'Tue', value: 92 },
                  { day: 'Wed', value: 78 },
                  { day: 'Thu', value: 95 },
                  { day: 'Fri', value: 88 },
                  { day: 'Sat', value: 65 },
                  { day: 'Sun', value: 58 }
                ].map(item => (
                  <div key={item.day} className="flex items-center space-x-3">
                    <span className="w-12 text-sm text-white/80">{item.day}</span>
                    <div className="flex-1 bg-white/10 rounded-full h-6 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#0077B6] to-[#F76C1B] h-full flex items-center justify-end pr-2 text-xs font-bold"
                        style={{ width: `${item.value}%` }}
                      >
                        {item.value}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card glass>
              <h4 className="font-bold text-lg mb-4">Transport Mode Distribution</h4>
              <div className="space-y-4">
                {[
                  { mode: 'Air Freight', value: 35, color: 'from-blue-500 to-cyan-500' },
                  { mode: 'Land Transport', value: 28, color: 'from-orange-500 to-red-500' },
                  { mode: 'Sea Freight', value: 25, color: 'from-teal-500 to-blue-600' },
                  { mode: 'Multi-Modal', value: 12, color: 'from-purple-500 to-pink-500' }
                ].map(item => (
                  <div key={item.mode}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white/90">{item.mode}</span>
                      <span className="font-bold">{item.value}%</span>
                    </div>
                    <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${item.color} h-full`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

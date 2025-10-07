import React, { useState } from 'react';
import { Package, MapPin, Plane, Truck, Ship, ArrowRight, CheckCircle, Calendar, DollarSign } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input, Select } from '../components/Input';

export const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    origin: '',
    destination: '',
    shipmentType: 'air',
    cargoType: '',
    weight: '',
    notes: ''
  });
  const [quote, setQuote] = useState<{ cost: number; days: number } | null>(null);

  const calculateQuote = () => {
    const weight = parseFloat(formData.weight);
    let cost = 0;
    let days = 0;

    switch (formData.shipmentType) {
      case 'air':
        cost = weight * 6.5;
        days = 2;
        break;
      case 'land':
        cost = weight * 2.2;
        days = 8;
        break;
      case 'sea':
        cost = weight * 0.8;
        days = 18;
        break;
      case 'multimodal':
        cost = weight * 3.5;
        days = 5;
        break;
    }

    setQuote({ cost: Math.round(cost), days });
  };

  const handleNext = () => {
    if (step === 2) {
      calculateQuote();
    }
    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = () => {
    alert('Booking request submitted successfully! We will contact you within 24 hours.');
    setStep(1);
    setFormData({
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      origin: '',
      destination: '',
      shipmentType: 'air',
      cargoType: '',
      weight: '',
      notes: ''
    });
    setQuote(null);
  };

  const locations = [
    { value: 'mumbai', label: 'Mumbai, India' },
    { value: 'delhi', label: 'Delhi, India' },
    { value: 'bangalore', label: 'Bangalore, India' },
    { value: 'chennai', label: 'Chennai, India' },
    { value: 'pune', label: 'Pune, India' },
    { value: 'hcmc', label: 'Ho Chi Minh City, Vietnam' },
    { value: 'hanoi', label: 'Hanoi, Vietnam' },
    { value: 'danang', label: 'Da Nang, Vietnam' },
    { value: 'haiphong', label: 'Haiphong, Vietnam' }
  ];

  const cargoTypes = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'textiles', label: 'Textiles & Apparel' },
    { value: 'machinery', label: 'Machinery & Equipment' },
    { value: 'food', label: 'Food & Beverages' },
    { value: 'chemicals', label: 'Chemicals' },
    { value: 'other', label: 'Other' }
  ];

  const shipmentTypes = [
    { id: 'air', icon: Plane, title: 'Air Freight', desc: '2-3 days', color: 'from-blue-500 to-cyan-500' },
    { id: 'land', icon: Truck, title: 'Land Transport', desc: '7-10 days', color: 'from-orange-500 to-red-500' },
    { id: 'sea', icon: Ship, title: 'Sea Freight', desc: '15-25 days', color: 'from-teal-500 to-blue-600' },
    { id: 'multimodal', icon: Package, title: 'Multi-Modal', desc: '4-6 days', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your <span className="bg-gradient-to-r from-[#0077B6] to-[#F76C1B] bg-clip-text text-transparent">Shipment</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get instant quotes and book your logistics in 4 simple steps
          </p>
        </div>

        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3, 4].map((s, idx) => (
            <React.Fragment key={s}>
              <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all ${
                step >= s ? 'bg-gradient-to-r from-[#0077B6] to-[#F76C1B] text-white scale-110' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > s ? <CheckCircle className="w-6 h-6" /> : s}
              </div>
              {idx < 3 && (
                <div className={`w-16 h-1 mx-2 rounded-full transition-all ${
                  step > s ? 'bg-gradient-to-r from-[#0077B6] to-[#F76C1B]' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <Card className="p-8 md:p-12">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 1: Your Information</h3>
              <Input
                label="Full Name"
                placeholder="Enter your name"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@company.com"
                value={formData.customerEmail}
                onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.customerPhone}
                onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                required
              />
              <div className="flex justify-end">
                <Button
                  onClick={handleNext}
                  disabled={!formData.customerName || !formData.customerEmail || !formData.customerPhone}
                >
                  Next <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 2: Shipment Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Origin"
                  options={[{ value: '', label: 'Select origin...' }, ...locations]}
                  value={formData.origin}
                  onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                  required
                />
                <Select
                  label="Destination"
                  options={[{ value: '', label: 'Select destination...' }, ...locations]}
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  required
                />
              </div>
              <Select
                label="Cargo Type"
                options={[{ value: '', label: 'Select cargo type...' }, ...cargoTypes]}
                value={formData.cargoType}
                onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                required
              />
              <Input
                label="Approximate Weight (kg)"
                type="number"
                placeholder="e.g., 500"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                required
              />
              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!formData.origin || !formData.destination || !formData.cargoType || !formData.weight}
                >
                  Next <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 3: Choose Transport Mode</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {shipmentTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setFormData({ ...formData, shipmentType: type.id })}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.shipmentType === type.id
                        ? 'border-[#0077B6] bg-[#0077B6]/5 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-lg flex items-center justify-center mb-4`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">{type.title}</h4>
                    <p className="text-gray-600 text-sm">{type.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleNext}>
                  Get Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {step === 4 && quote && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Step 4: Review & Confirm</h3>

              <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-xl p-8 text-white">
                <h4 className="text-xl font-bold mb-6">Your Quote</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <DollarSign className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold">${quote.cost}</div>
                    <div className="text-sm opacity-90">Estimated Cost</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <Calendar className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold">{quote.days}</div>
                    <div className="text-sm opacity-90">Days Delivery</div>
                  </div>
                </div>
              </div>

              <Card className="bg-gray-50">
                <h4 className="font-bold text-lg mb-4">Shipment Summary</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer:</span>
                    <span className="font-semibold">{formData.customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Route:</span>
                    <span className="font-semibold">{locations.find(l => l.value === formData.origin)?.label} → {locations.find(l => l.value === formData.destination)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold capitalize">{formData.shipmentType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-semibold">{formData.weight} kg</span>
                  </div>
                </div>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleSubmit}>
                  Confirm Booking
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

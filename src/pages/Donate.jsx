import React, { useState } from 'react';
import { Heart, Shield, Award, Users, Phone, Mail, MapPin, IndianRupee } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const predefinedAmounts = [500, 1000, 2100, 5100, 11000, 21000];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-200">
                <span className="text-white font-bold text-2xl">SSF</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Heart className="w-3 h-3 text-white" />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shri Shankaracharya Swaroopanand Foundation
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-700 mb-6">
            Support Our Spiritual Mission
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-orange-100">
            Your generous donation supports our spiritual initiatives, educational programs, and community welfare activities. 
            Help us preserve and propagate the eternal wisdom of Sanatan Dharma.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Donation Form */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Heart className="w-7 h-7" />
                  Make a Sacred Offering
                </h3>
                <p className="text-orange-100 mt-2">Your contribution makes a difference</p>
              </div>

              <form className="p-6 md:p-8 space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className=" text-gray-700 font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-orange-500" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-300 transition-all duration-200 bg-gray-50 hover:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className=" text-gray-700 font-semibold mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-orange-500" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-300 transition-all duration-200 bg-gray-50 hover:bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className=" text-gray-700 font-semibold mb-3 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-500" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-300 transition-all duration-200 bg-gray-50 hover:bg-white"
                    required
                  />
                </div>

                {/* Donation Amount */}
                <div>
                  <label className=" text-gray-700 font-semibold mb-4 flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-orange-500" />
                    Donation Amount (INR)
                  </label>
                  
                  {/* Predefined Amounts */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 mb-6">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-4 border-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                          selectedAmount === amount
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-orange-500 shadow-lg shadow-orange-200'
                            : 'border-orange-200 text-gray-700 hover:bg-orange-50 hover:border-orange-300'
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-300 transition-all duration-200 bg-gray-50 hover:bg-white pl-12"
                      min="1"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <IndianRupee className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Message (Optional)
                  </label>
                  <textarea
                    placeholder="Share your blessings or specific purpose for donation..."
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-300 transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Make Sacred Offering
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Spiritual Quote */}
        <div className="mt-12 text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-100 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-gray-800 italic leading-relaxed mb-4">
              "दानं भोगो नाशस्तिस्रो गतयो भवन्ति वित्तस्य। 
              यो न ददाति न भुङ्क्ते तस्य तृतीया गतिर्भवति॥"
            </p>
            <p className="text-gray-600 text-lg">
              Wealth has three destinations - charity, enjoyment, and destruction. 
              One who neither donates nor enjoys, meets with the third fate.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add motion component for animations
const motion = {
  div: ({ children, className, initial, animate }) => (
    <div className={className}>{children}</div>
  )
};

export default Donate;
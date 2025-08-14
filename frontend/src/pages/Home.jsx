import React, { useState } from "react";
import Navbar from "../components/layouts/Navbar";

function Home() {
  const [searchData, setSearchData] = useState({
    location: "",
    roomType: "",
    budget: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Searching for:", searchData);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                Find Your
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Perfect PG
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover verified, affordable paying guest accommodations with all amenities. 
                Your next home is just a click away.
              </p>
            </div>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-6xl mx-auto mt-12">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Location Input */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="location"
                        placeholder="Enter city, area or landmark"
                        value={searchData.location}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                      />
                    </div>
                  </div>

                  {/* Room Type Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                    <select
                      name="roomType"
                      value={searchData.roomType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    >
                      <option value="">Any Type</option>
                      <option value="single">Single Room</option>
                      <option value="shared">Shared Room</option>
                      <option value="private">Private Room</option>
                    </select>
                  </div>

                  {/* Budget Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                    <select
                      name="budget"
                      value={searchData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    >
                      <option value="">Any Budget</option>
                      <option value="0-5000">Under ₹5,000</option>
                      <option value="5000-10000">₹5,000 - ₹10,000</option>
                      <option value="10000-15000">₹10,000 - ₹15,000</option>
                      <option value="15000+">Above ₹15,000</option>
                    </select>
                  </div>
                </form>
                
                {/* Search Button */}
                <div className="mt-6">
                  <button
                    onClick={handleSearch}
                    className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-xl font-semibold text-lg transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search PGs
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
                <div className="text-gray-300">Verified PGs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Cities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">1M+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect PG in just 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Search & Filter</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse through thousands of verified PGs. Use our advanced filters to find exactly what you're looking for.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Visit & Compare</h3>
              <p className="text-gray-600 leading-relaxed">
                Schedule visits to your shortlisted PGs. Compare amenities, prices, and locations to make the best choice.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Book & Move In</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete the booking process online with secure payments. Move in and enjoy your new home!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Cities
            </h2>
            <p className="text-xl text-gray-600">
              Discover PGs in top cities across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Bangalore", count: "2,500+" },
              { name: "Delhi", count: "1,800+" },
              { name: "Mumbai", count: "1,200+" },
              { name: "Pune", count: "980+" },
              { name: "Hyderabad", count: "750+" },
              { name: "Chennai", count: "650+" }
            ].map((city, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition duration-300 cursor-pointer group">
                <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">
                  {city.name}
                </div>
                <div className="text-gray-500 mt-2">{city.count} PGs</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose PG Finder?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the most reliable and user-friendly platform for PG and hostel bookings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Verified PGs */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Verified</h3>
              <p className="text-gray-600">All properties are verified and quality-checked for your safety and comfort</p>
            </div>

            {/* Affordable Pricing */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Prices</h3>
              <p className="text-gray-600">Find PGs that fit your budget with transparent pricing and no hidden costs</p>
            </div>

            {/* Easy Booking */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Booking</h3>
              <p className="text-gray-600">Book your preferred PG instantly with our seamless online booking system</p>
            </div>

            {/* 24/7 Support */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl text-center hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Get help anytime with our dedicated customer support team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Perfect PG?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of happy customers who found their ideal accommodation through our platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-xl font-bold text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Browse PGs
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition duration-300 transform hover:scale-105">
              List Your Property
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

import React, { useState } from "react";
import Navbar from "../components/layouts/Navbar";

function Listings() {
  const [filters, setFilters] = useState({
    location: "",
    roomType: "",
    budget: "",
    amenities: []
  });
  const [viewType, setViewType] = useState("grid"); // grid or list
  const [sortBy, setSortBy] = useState("relevance");

  // Sample PG data
  const pgListings = [
    {
      id: 1,
      name: "Comfort Stay PG",
      location: "Koramangala, Bangalore",
      price: 8500,
      roomType: "Single",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=250&fit=crop",
      rating: 4.5,
      reviews: 124,
      amenities: ["WiFi", "AC", "Laundry", "Meals"],
      available: true
    },
    {
      id: 2,
      name: "Elite Residency",
      location: "HSR Layout, Bangalore",
      price: 12000,
      roomType: "Private",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop",
      rating: 4.8,
      reviews: 89,
      amenities: ["WiFi", "AC", "Gym", "Parking"],
      available: true
    },
    {
      id: 3,
      name: "Budget Stay",
      location: "Marathahalli, Bangalore",
      price: 6500,
      roomType: "Shared",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
      rating: 4.2,
      reviews: 67,
      amenities: ["WiFi", "Meals", "Laundry"],
      available: false
    },
    {
      id: 4,
      name: "Premium Heights",
      location: "Indiranagar, Bangalore",
      price: 15000,
      roomType: "Single",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop",
      rating: 4.7,
      reviews: 156,
      amenities: ["WiFi", "AC", "Gym", "Pool", "Meals"],
      available: true
    },
    {
      id: 5,
      name: "Student Hub",
      location: "BTM Layout, Bangalore",
      price: 7500,
      roomType: "Shared",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop",
      rating: 4.3,
      reviews: 92,
      amenities: ["WiFi", "Study Room", "Laundry"],
      available: true
    },
    {
      id: 6,
      name: "Green Valley PG",
      location: "Electronic City, Bangalore",
      price: 9000,
      roomType: "Single",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=250&fit=crop",
      rating: 4.4,
      reviews: 78,
      amenities: ["WiFi", "AC", "Garden", "Parking"],
      available: true
    }
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const PGCard = ({ pg }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group">
      <div className="relative">
        <img 
          src={pg.image} 
          alt={pg.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            pg.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {pg.available ? 'Available' : 'Occupied'}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition duration-300">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{pg.name}</h3>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">{pg.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({pg.reviews})</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-3 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {pg.location}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {pg.amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">
              {amenity}
            </span>
          ))}
          {pg.amenities.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
              +{pg.amenities.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-900">₹{pg.price.toLocaleString()}</span>
            <span className="text-gray-500 text-sm">/month</span>
            <div className="text-xs text-gray-500">{pg.roomType} Room</div>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-semibold transition duration-300 transform hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      
      {/* Header with Search */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-6">Find Your Perfect PG</h1>
          
          {/* Quick Search */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Enter location"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                <select
                  value={filters.roomType}
                  onChange={(e) => handleFilterChange('roomType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Any Type</option>
                  <option value="single">Single Room</option>
                  <option value="shared">Shared Room</option>
                  <option value="private">Private Room</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                <select
                  value={filters.budget}
                  onChange={(e) => handleFilterChange('budget', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Any Budget</option>
                  <option value="0-5000">Under ₹5,000</option>
                  <option value="5000-10000">₹5,000 - ₹10,000</option>
                  <option value="10000-15000">₹10,000 - ₹15,000</option>
                  <option value="15000+">Above ₹15,000</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-gray-700 font-semibold">
              {pgListings.length} PGs found
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewType('grid')}
              className={`p-2 rounded-lg ${viewType === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewType('list')}
              className={`p-2 rounded-lg ${viewType === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* PG Grid */}
        <div className={`grid gap-6 ${
          viewType === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {pgListings.map(pg => (
            <PGCard key={pg.id} pg={pg} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 transform hover:scale-105">
            Load More PGs
          </button>
        </div>
      </div>
    </>
  );
}

export default Listings; 
import React from "react";
import Navbar from "../components/layouts/Navbar";

function Listings() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              PG Listings
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Coming soon! This will be replaced with the map-based listings view.
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-gray-500">
                <p>This page will include:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Map view with PG locations</li>
                  <li>Sidebar with listing cards</li>
                  <li>Filter options</li>
                  <li>Search functionality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listings; 
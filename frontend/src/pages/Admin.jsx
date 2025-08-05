import React from "react";
import Navbar from "../components/layouts/Navbar";

function Admin() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Admin Panel
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Coming soon! This will be replaced with the admin panel for PG owners.
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-gray-500">
                <p>This page will include:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Dashboard with listing management</li>
                  <li>Add/Edit/Delete PG listings</li>
                  <li>Booking management</li>
                  <li>Analytics and reports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin; 
import React from "react";
import { FaWater, FaRegGrinBeam, FaTint, FaThermometerHalf } from "react-icons/fa";

const WateringGuide = () => {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-6 text-green-700">🌿 The Ultimate Watering Guide</h2>
      <p className="text-center mb-10 text-lg">
        Give your plants the hydration they deserve. Learn when and how to water for a thriving indoor jungle.
      </p>

      {/* Why Watering Matters */}
      <div className="bg-base-100 rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-2">💧 Why Watering Matters</h3>
        <p>
          Water helps your plants absorb nutrients, stay cool, and grow strong. Mastering watering is the key to
          healthy, vibrant leaves and sturdy roots.
        </p>
      </div>

      {/* General Watering Table */}
      <div className="overflow-x-auto mb-8">
        <h3 className="text-2xl font-semibold mb-4">🌱 General Watering Guide</h3>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Plant Type</th>
              <th>Watering Frequency</th>
              <th>Tips</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Succulents & Cacti</td>
              <td>Every 10–14 days</td>
              <td>Let soil dry out completely</td>
            </tr>
            <tr>
              <td>Tropical Plants</td>
              <td>Every 3–7 days</td>
              <td>Mist leaves for humidity</td>
            </tr>
            <tr>
              <td>Ferns & Calatheas</td>
              <td>2–3 times a week</td>
              <td>Keep soil slightly moist</td>
            </tr>
            <tr>
              <td>Flowering Plants</td>
              <td>Every 5–7 days</td>
              <td>Water more during blooming</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Signs Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-100 p-5 rounded-lg">
          <h4 className="text-xl font-bold mb-2 text-green-800">🚩 Signs Your Plant Needs Water</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Dry or curling leaves</li>
            <li>Soil pulling from edges of the pot</li>
            <li>Drooping stems or leaves</li>
            <li>Lightweight pots</li>
          </ul>
        </div>

        <div className="bg-red-100 p-5 rounded-lg">
          <h4 className="text-xl font-bold mb-2 text-red-800">🛑 Signs of Overwatering</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Yellowing leaves</li>
            <li>Mold or fungus on soil</li>
            <li>Mushy stems or roots</li>
            <li>Soggy, wet soil with no drainage</li>
          </ul>
        </div>
      </div>

      {/* Seasonal Tips */}
      <div className="bg-base-200 p-6 rounded-xl mb-8">
        <h3 className="text-2xl font-semibold mb-2">🌤️ Seasonal Watering Tips</h3>
        <p className="mb-1">
          <strong>Spring & Summer:</strong> Plants grow quickly and need more water.
        </p>
        <p>
          <strong>Fall & Winter:</strong> Growth slows — reduce watering frequency.
        </p>
      </div>

      {/* Pro Tip */}
      <div className="bg-secondary text-white p-6 rounded-xl shadow-md mb-10">
        <h3 className="text-2xl font-bold mb-2">🧠 Plantera Pro Tip</h3>
        <p>
          Let Plantera help you stay on track with smart watering reminders tailored to each plant. Get notifications,
          care history, and more — all in one app!
        </p>
      </div>

      {/* Best Practices */}
      <div className="bg-base-100 p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold mb-4">✅ Best Watering Practices</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Use room-temperature water</li>
          <li>Water slowly until it drains out the bottom</li>
          <li>Empty saucers after 10–15 minutes</li>
          <li>Water in the morning for better absorption</li>
        </ul>
      </div>
    </div>
  );
};

export default WateringGuide;

import React from "react";
import { FaLeaf, FaFlask, FaExclamationTriangle, FaRegLightbulb } from "react-icons/fa";

const FertilizingGuide = () => {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-6 text-green-700">
        🌼 Fertilizing Tips to Keep Your Plants Thriving
      </h2>
      <p className="text-center mb-10 text-lg">
        Feed your plants right and watch them flourish. Here's how to fertilize for strong roots, lush leaves, and vibrant blooms.
      </p>

      {/* Why Fertilizing Matters */}
      <div className="bg-base-100 rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-2">🌿 Why Fertilizing Matters</h3>
        <p>
          Over time, soil loses its nutrients. Fertilizing restores the essential elements your plants need to thrive — from root to leaf tip.
        </p>
      </div>

      {/* Types of Fertilizers */}
      <div className="bg-green-50 rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaFlask className="text-green-600" /> Types of Fertilizers
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>All-Purpose:</strong> Great for general houseplants</li>
          <li><strong>Slow-Release:</strong> Low-maintenance feeding over time</li>
          <li><strong>Liquid:</strong> Fast absorption for quick growth</li>
          <li><strong>Organic:</strong> Natural and gentle on roots</li>
        </ul>
        <p className="mt-3"><strong>💡 Tip:</strong> Check the NPK ratio — Nitrogen (N), Phosphorus (P), Potassium (K).</p>
      </div>

      {/* Frequency */}
      <div className="bg-base-200 rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-3">🗓️ Fertilizing Schedule</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Spring & Summer:</strong> Every 2–4 weeks</li>
          <li><strong>Fall:</strong> Once a month</li>
          <li><strong>Winter:</strong> Skip or reduce — most plants are dormant</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">Water your plant before applying fertilizer to avoid root burn.</p>
      </div>

      {/* Signs it needs fertilizer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-yellow-100 p-5 rounded-lg">
          <h4 className="text-xl font-bold mb-2 text-yellow-800">⚠️ Signs Your Plant Needs Fertilizer</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pale or yellowing leaves</li>
            <li>Stunted or slow growth</li>
            <li>Small or few flowers</li>
            <li>General dullness in appearance</li>
          </ul>
        </div>

        <div className="bg-red-100 p-5 rounded-lg">
          <h4 className="text-xl font-bold mb-2 text-red-800">🚫 Don’ts of Fertilizing</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Don’t over-fertilize — it can burn roots</li>
            <li>Don’t apply to dry soil</li>
            <li>Don’t use full-strength without dilution</li>
            <li>Don’t mix random types</li>
          </ul>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="bg-secondary text-white p-6 rounded-xl shadow-md mb-10">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <FaRegLightbulb className="text-white" /> Plantera Pro Tip
        </h3>
        <p>
          Stay ahead with Plantera's built-in fertilizing reminders and care plans. Track your plant’s feeding cycles effortlessly.
        </p>
      </div>

      {/* Best Practices */}
      <div className="bg-base-100 p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold mb-4">✅ Fertilizing Best Practices</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Use diluted liquid fertilizer every 2–4 weeks</li>
          <li>Fertilize during active growth only</li>
          <li>Flush soil with clean water monthly to avoid buildup</li>
          <li>Use species-specific fertilizer for better results</li>
        </ul>
      </div>
    </div>
  );
};

export default FertilizingGuide;

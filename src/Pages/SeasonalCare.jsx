import React from "react";

const SeasonalCare = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
        🌤️ Seasonal Plant Care Guide
      </h2>

      {/* Spring */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2 text-green-600">🌱 Spring</h3>
        <p>
          This is your plant’s growth season. Repot if needed, start fertilizing, prune old leaves, and increase watering as temperatures rise.
        </p>
      </div>

      {/* Summer */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2 text-yellow-600">🌞 Summer</h3>
        <p>
          Plants thrive with warmth and light. Maintain consistent watering and feeding, and protect from direct afternoon sun if indoors.
        </p>
      </div>

      {/* Fall */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2 text-orange-600">🍂 Fall</h3>
        <p>
          Growth slows down. Reduce watering and feeding gradually. Remove dead leaves and prepare your plant for dormancy.
        </p>
      </div>

      {/* Winter */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2 text-blue-600">❄️ Winter</h3>
        <p>
          Most plants rest during winter. Water sparingly, avoid fertilizing, and move them closer to light sources if indoors.
        </p>
      </div>

      <div className="mt-10 p-4 bg-base-200 rounded-lg text-center">
        <p className="text-lg font-medium">
          🪴 Plantera keeps track of seasonal changes so your plants stay happy all year round.
        </p>
      </div>
    </div>
  );
};

export default SeasonalCare;

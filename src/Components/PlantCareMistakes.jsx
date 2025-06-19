import React from "react";
import { FaTint, FaSun, FaThermometerHalf, FaWind, FaExclamationTriangle } from "react-icons/fa";
  import plant from "../plant.json";
import Lottie from "lottie-react";

const PlantCareMistakes = () => {
  const tips = [
    {
      icon: <FaTint className="text-blue-400 text-3xl" />,
      title: "Watering Mistakes",
      description:
        "Overwatering is the number one killer of houseplants. Always check the soil before watering.",
    },
    {
      icon: <FaSun className="text-yellow-400 text-3xl" />,
      title: "Light Requirements",
      description:
        "Most plants need bright, indirect light. Direct sun can scorch leaves of many indoor plants.",
    },
    {
      icon: <FaThermometerHalf className="text-red-400 text-3xl" />,
      title: "Temperature Swings",
      description:
        "Avoid placing plants near drafty windows, doors, or AC/heating vents that cause temperature fluctuations.",
    },
    {
      icon: <FaWind className="text-green-400 text-3xl" />,
      title: "Poor Air Circulation",
      description:
        "Stagnant air can promote fungal and pest issues. Ensure good airflow around your plants.",
    },
    {
      icon: <FaExclamationTriangle className="text-orange-400 text-3xl" />,
      title: "Ignoring Pests",
      description:
        "Regularly inspect the underside of leaves for early signs of pests like spider mites or mealybugs.",
    },
  ];

  return (
    <div className="bg-[#f7fbf2] min-h-screen p-4 py-12 ">
      <div className="w-11/12 mx-auto">
      <div className="text-center mb-10">
        <div className="w-[70px] flex justify-center items-center mx-auto">
        <Lottie animationData={plant} loop={true} />;
        </div>
        <h1 className="text-4xl font-bold text-neutral">
          Top Plant Care Mistakes to Avoid
        </h1>
        <p className="mt-2 text-gray-500">
          Even experienced plant parents make these common mistakes. Learn how to avoid them and keep your plants thriving year-round.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, idx) => (
          <div key={idx} className="card bg-base-100 shadow-md">
            <div className="card-body flex-row items-start gap-4">
              <div className="pt-2">{tip.icon}</div>
              <div>
                <h2 className="card-title text-lg">{tip.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="card shadow-md bg-gradient-to-r from-secondary to-green-700 text-white">
          <div className="card-body space-y-4">
            <h2 className="card-title text-xl">
              Ready to become a plant expert?
            </h2>
            <p>Get personalized care reminders for your specific plants.</p>
            <div className="card-actions">
              <button className="btn bg-white text-green-700 hover:bg-green-100">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PlantCareMistakes;

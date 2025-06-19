import React from "react";
import {
  FaWater,
  FaSun,
  FaTemperatureLow,
  FaThermometerHalf,
  FaLeaf,
} from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router";

const PlantsDetails = () => {
    const {id} = useParams();
    const plants = useLoaderData();
    const plantsDetails = plants.find((plant) => plant._id == id);
    const {plantName, photo, description, lastWateredDate, nextWateringDate, name, email, wateringFrequency, category, careLevel, healthStatus } = plantsDetails;
    

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 gap-6">
      {/* Header */}
      <div className="rounded-lg bg-gradient-to-l from-[#69af07] to-[#2c2c2c] p-6 text-white text-center pt-8 pb-8 ">
        <h1 className="text-4xl font-bold">{plantName}</h1>
        <p className="text-lg italic">{plantName}</p>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          <span className="badge badge-success">{category}</span>
          <span className="badge badge-accent">{careLevel}</span>
          <span className="badge badge-primary">{healthStatus}</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="lg:sticky lg:top-8 lg:self-start">
          {/* Image */}
          <img
            src={photo}
            className="rounded-lg w-full h-[300px] object-cover shadow-md"
          />

          {/* Plant Needs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="p-4 rounded-lg bg-green-50 text-center shadow-sm">
              <FaWater className="text-2xl mx-auto mb-2 text-green-600" />
              <h4 className="font-semibold">Watering</h4>
              <p>Every {wateringFrequency}</p>
            </div>
            <div className="p-4 rounded-lg bg-yellow-50 text-center shadow-sm">
              <FaSun className="text-2xl mx-auto mb-2 text-yellow-600" />
              <h4 className="font-semibold">Light</h4>
              <p>Low to Medium</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 text-center shadow-sm">
              <FaTemperatureLow className="text-2xl mx-auto mb-2 text-blue-600" />
              <h4 className="font-semibold">Humidity</h4>
              <p>Low</p>
            </div>
            <div className="p-4 rounded-lg bg-red-50 text-center shadow-sm">
              <FaThermometerHalf className="text-2xl mx-auto mb-2 text-red-600" />
              <h4 className="font-semibold">Temp</h4>
              <p>60–85°F (15–29°C)</p>
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">About This Plant</h2>
          <p className="mb-4">
            {description}
          </p>

          {/* Care Instructions */}
          <div className="bg-green-50 border border-green-100 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 font-semibold text-green-700 mb-2">
              <FaLeaf />
              Care Instructions
            </div>
            <p>
              Allow soil to dry between waterings. Tolerates low light but grows
              faster in bright light. Avoid overwatering.
            </p>
          </div>

          {/* Watering Schedule */}
          <div className="bg-blue-50 mt-8 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-700 mb-4">
              <MdOutlineDateRange /> Watering Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded shadow text-center">
                <h4 className="font-medium text-gray-600">Last Watered</h4>
                <p className="text-green-700 font-semibold text-lg">
                  {lastWateredDate}
                </p>
              </div>
              <div className="bg-white p-3 rounded shadow text-center">
                <h4 className="font-medium text-gray-600">Next Watering</h4>
                <p className="text-green-700 font-semibold text-lg">
                 {nextWateringDate}
                </p>
              </div>
            </div>
          </div>

          {/* Added By */}
          <div className="bg-gray-100 p-4 mt-6 rounded-lg flex items-center gap-4 shadow-sm">
            <BsPersonCircle className="text-4xl text-gray-700" />
            <div>
              <h4 className="font-semibold text-lg">{name}</h4>
              <p className="text-sm text-gray-500">{email}</p>
              <p className="text-xs text-gray-400">Added on April 15th, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsDetails;

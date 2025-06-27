import React from "react";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router";

const plants = [
  {
    name: "Snake Plant",
    description:
      "Nearly indestructible, tolerates low light and infrequent watering.",
    image: "https://i.ibb.co/cKcrMszL/photo-1572688484438-313a6e50c333.jpg",
  },
  {
    name: "Pothos",
    description:
      "Fast-growing, versatile, and thrives in a variety of light conditions.",
    image: "https://i.ibb.co/XfLyPtQx/golden-pothos.jpg",
  },
  {
    name: "ZZ Plant",
    description:
      "Drought-tolerant with glossy leaves, perfect for forgetful waterers.",
    image: "https://i.ibb.co/JjtNBx02/plant-pot-table-close-up.jpg",
  },
  {
    name: "Spider Plant",
    description:
      "Air-purifying, produces baby plants, and tolerates neglect well.",
    image: "https://i.ibb.co/Q7KMZ4ZW/30818.jpg",
  },
];

const BeginnersPlant = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className=" py-12 lg:py-16 bg-base-100 text-center">
        <div className="badge badge-secondary gap-2 mb-4">
          <FaLeaf size={16} /> Beginner Friendly
        </div>
        <h1 className="text-4xl font-bold mb-2">
          Perfect Plants for Beginners
        </h1>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          New to plant parenting? These low-maintenance varieties are almost
          impossible to kill and perfect for building your confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plants.map((plant, index) => (
            <div
              key={index}
              className="card bg-white shadow-md hover:shadow-lg transition duration-300"
            >
              <figure>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg font-semibold">
                  {plant.name}
                </h2>
                <p className="text-sm text-gray-500">{plant.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to={"/all-plants"} className="mt-10 btn btn-secondary text-white">
          Explore All Beginner Plants
        </Link>
      </div>
    </div>
  );
};

export default BeginnersPlant;

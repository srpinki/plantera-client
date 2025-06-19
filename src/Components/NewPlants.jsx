import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useLoaderData } from "react-router";
import NewPlantsCard from "./NewPlantsCard";

const NewPlants = () => {
  const allPlants = useLoaderData();
  const plants = [...allPlants].reverse().slice(0, 6);

  return (
    <div className="w-11/12 mx-auto my-12 lg:my-16">
      <div className="flex justify-between items-center">
        <div className="w-8/12 space-y-4">
          <h2 className="text-4xl font-bold">New Plant Arrivals</h2>
          <p className="text-accent font-medium">
            Discover our latest collection of indoor plants, perfect for
            beginners and plant enthusiasts alike. Each comes with personalized
            care guides.
          </p>
        </div>
        <Link to={"/all-plants"} className="btn btn-secondary">
          View all plants <IoIosArrowRoundForward size={25} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {plants.map((plant) => (
          <NewPlantsCard key={plant._id} plant={plant}></NewPlantsCard>
        ))}
      </div>
    </div>
  );
};

export default NewPlants;

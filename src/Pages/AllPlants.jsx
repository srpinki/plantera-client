import React from "react";
import { FaEye, FaLeaf } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { format } from 'date-fns';
import DocumentTitle from "../Components/DocumentTitle";

const AllPlants = () => {
   DocumentTitle('Explore All Plants - Plantera Plant Library');

  const plants = useLoaderData();

  return (
    <div className="w-11/12 mx-auto my-16">
      <div className="flex items-center justify-center gap-2 text-3xl font-semibold text-secondary mb-5">
        <FaLeaf />
        All Plants
      </div>
      <div>
        <table className="table w-full">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th>Image</th>
              <th>Plant Name</th>
              <th>Category</th>
              <th>Watering</th>
              <th>Last Watered Date</th>
              <th>Next Watering Date</th>
              <th>Care Level</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <tr key={plant._id} className="hover:bg-[#f9fafb]">

                <td>
                  <div className="avatar">
                    <div className="w-12 rounded">
                      <img src={plant.photo} alt={plant.plantName} />
                    </div>
                  </div>
                </td>

                <td className="font-medium">{plant.plantName}</td>

                <td>{plant.category}</td>

                <td>{plant.wateringFrequency}</td>

                <td>{format(new Date(plant.lastWateredDate), 'MMMM d, yyyy')}</td>

                <td>{format(new Date(plant.nextWateringDate), 'MMMM d, yyyy')}</td>


                <td><button className="badge badge-sm bg-[#DCFCE7]">{plant.careLevel}</button></td>

                <td className="text-right">
                  <Link to={`/plants-details/${plant._id}`}>
                    <button className="btn btn-outline btn-secondary btn-sm">
                      <FaEye className="mr-1" /> View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;

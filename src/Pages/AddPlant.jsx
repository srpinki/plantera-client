import React, { use } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaLeaf } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/Context";
import DocumentTitle from "../Components/DocumentTitle";

const AddPlant = () => {
   DocumentTitle('Add a New Plant - Grow Your Green Collection | Plantera');

  const {user} = use(AuthContext);
  
  const handleAddPlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());

    //send data to the db
    fetch('https://plant-area-server-side.vercel.app/plants', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newPlant)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('From database', data);
                if (data.insertedId) {
          Swal.fire({
            title: "Plant added successfully!",
            icon: "success",
            draggable: true,
          });
        }
        
    })
  };
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg my-8">
      <h2 className="text-2xl font-semibold text-center mb-8 flex justify-center gap-4 items-center">
        <FaLeaf color="#69af07" />
        Add a New Plant
      </h2>
      <form className="space-y-6" onSubmit={handleAddPlant}>
        {/* Image*/}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image
          </label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Enter photo URL"
          />
        </div>

        {/* Plant Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Plant Name
          </label>
          <input
            type="text"
            placeholder="e.g. Monstera Deliciosa"
            className="input input-bordered w-full mt-1"
            name="plantName"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select className="select select-bordered w-full mt-1" name="category">
            <option defaultValue>
              Select plant category
            </option>
            <option>Succulent</option>
            <option>Fern</option>
            <option>Flowering</option>
            <option>Herb</option>
            <option>Tree</option>
            <option>Cactus</option>
            <option>Vine</option>
            <option>Bonsai</option>
            <option>Palm</option>
            <option>Other</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Describe your plant... include any special characteristics, history, etc."
            className="textarea textarea-bordered w-full mt-1"
            name="description"
          />
        </div>

        {/* Care Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Care Level
          </label>
          <select className="select select-bordered w-full mt-1" name="careLevel">
            <option defaultValue>
              Select care difficulty
            </option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Difficult</option>
          </select>
        </div>

        {/* Watering Frequency */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Watering Frequency
          </label>
          <input
            type="text"
            placeholder="e.g. Every 3 days"
            className="input input-bordered w-full mt-1"
            name="wateringFrequency"
          />
          <p className="text-xs text-gray-400 mt-1">
            How often does this plant need to be watered?
          </p>
        </div>

        {/* Last Watered Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Watered Date
          </label>
          <input type="date" className="input input-bordered w-full mt-1" name="lastWateredDate"/>
        </div>

        {/* Next Watering Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Next Watering Date
          </label>
          <input type="date" className="input input-bordered w-full mt-1" name="nextWateringDate"/>
        </div>

        {/* Health Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Health Status
          </label>
          <input
            type="text"
            placeholder="e.g. Healthy, Needs attention"
            className="input input-bordered w-full mt-1"
            name="healthStatus"
          />
        </div>

        {/* User Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            User Email
          </label>
          <input
            type="email"
            placeholder="Enter user email"
            className="input input-bordered w-full mt-1"
            name="email"
            value={user?.email || ''}
            readOnly
          />
        </div>

        {/* User Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            placeholder="Enter user name"
            className="input input-bordered w-full mt-1"
            name="name"
            value={user?.displayName || ''}
            readOnly
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="btn btn-secondary w-full text-white font-semibold"
          >
            Add Plant
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlant;

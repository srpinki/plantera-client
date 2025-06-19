import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/Context";
import { FaLeaf } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const UpdatePlants = () => {
  const { id } = useParams();
  const plants = useLoaderData();


  const plantsUpdate = plants.find((plant) => plant._id == id);

  const {
    _id,
    photo,
    category,
    description,
    careLevel,
    healthStatus,
    nextWateringDate,
    wateringFrequency,
    plantName,
    lastWateredDate
  } = plantsUpdate;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPlant = Object.fromEntries(formData.entries());

    //send updated data to the db
    fetch(`https://plant-area-server-side.vercel.app/plants/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Plant updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        
      });
  };
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg my-8">
      <h2 className="text-2xl font-semibold text-center mb-8 flex justify-center gap-4 items-center">
        <FaLeaf color="#69af07" />
        Update Plant
      </h2>
      <form className="space-y-6" onSubmit={handleUpdate}>
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
            defaultValue={photo}
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
            defaultValue={plantName}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            className="select select-bordered w-full mt-1"
            name="category"
            defaultValue={category}
          >
            <option defaultValue>Select plant category</option>
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
            defaultValue={description}
          />
        </div>

        {/* Care Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Care Level
          </label>
          <select
            className="select select-bordered w-full mt-1"
            name="careLevel"
            defaultValue={careLevel}
          >
            <option defaultValue>Select care difficulty</option>
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
            defaultValue={wateringFrequency}
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
          <input
            type="date"
            className="input input-bordered w-full mt-1"
            name="lastWateredDate"
            defaultValue={lastWateredDate}
          />
        </div>

        {/* Next Watering Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Next Watering Date
          </label>
          <input
            type="date"
            className="input input-bordered w-full mt-1"
            name="nextWateringDate"
            defaultValue={nextWateringDate}
          />
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
            defaultValue={healthStatus}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="btn btn-secondary w-full text-white font-semibold"
          >
            Update Plant
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePlants;

import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../AuthProvider/Context";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { format } from 'date-fns';
import DocumentTitle from "../Components/DocumentTitle";

const MyPlants = () => {
  DocumentTitle('My Plants - Manage Your Garden with Plantera');

  const { user } = use(AuthContext);
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch("https://plant-area-server-side.vercel.app/plants")
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((p) => p.email === user.email);
          setPlants(filtered);
        });
    }
  }, [user?.email]);
  

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        console.log(result.isConfirmed);
        
      if (result.isConfirmed) {

        //start deleting the plants

        fetch(`https://plant-area-server-side.vercel.app/plants/${_id}`, {

          method: 'DELETE'

        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Plant has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Plants</h1>

      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200 shadow-sm">
          <thead className="bg-green-100">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Plant Name</th>
              <th>Watering</th>
              <th>Next Watering</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant, index) => (
              <tr key={plant._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={plant.photo}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td>{plant.plantName}</td>
                <td>{plant.wateringFrequency}</td>
                <td>{format(new Date(plant.nextWateringDate), 'MMMM d, yyyy')}</td>
                <td>
                  <button
                    onClick={() => navigate(`/auth/update-plants/${plant._id}`)}
                    className="btn btn-md btn-secondary mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(plant._id)}
                    className="btn btn-md btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {plants.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-4">
                  No plants added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPlants;

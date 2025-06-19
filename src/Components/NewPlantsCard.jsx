import React from "react";
import { IoIosArrowRoundForward, IoIosWater } from "react-icons/io";
import { Link } from "react-router";

const NewPlantsCard = ({ plant }) => {
  const {
    _id,
    photo,
    plantName,
    category,
    careLevel,
    healthStatus,
    wateringFrequency,
  } = plant;

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className=" h-[220px] overflow-hidden ">
          <img
            src={photo}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            alt="Plant"
          />
        </figure>
        <div className="card-body">
          <p className="italic">{category}</p>
          <h2 className="card-title text-2xl">{plantName}</h2>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">{careLevel}</div>
            <div className="badge badge-outline">{healthStatus}</div>
          </div>

          <div>
            <p className="flex items-center gap-2">
              <IoIosWater color="blue" />
              {wateringFrequency}
            </p>
          </div>

          <Link to={`/plants-details/${_id}`}  className="btn btn-secondary w-full">
            View Details <IoIosArrowRoundForward size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewPlantsCard;

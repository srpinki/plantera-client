import {
  FaSmog,
  FaBrain,
  FaHeart,
  FaSmile,
  FaTint,
  FaBolt,
} from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const benefits = [
  {
    title: "Improved Air Quality",
    icon: <FaSmog className="text-xl text-sky-500" />,
    description:
      "Plants naturally filter toxins and increase oxygen levels in your home",
  },
  {
    title: "Enhanced Focus",
    icon: <FaBrain className="text-xl text-purple-500" />,
    description:
      "Studies show plants can improve concentration and productivity by up to 15%",
  },
  {
    title: "Reduced Stress",
    icon: <FaHeart className="text-xl text-red-500" />,
    description:
      "Caring for plants lowers cortisol levels and promotes relaxation",
  },
  {
    title: "Boosted Mood",
    icon: <FaSmile className="text-xl text-yellow-500" />,
    description:
      "Indoor plants release endorphins and create a sense of accomplishment",
  },
  {
    title: "Natural Humidity",
    icon: <FaTint className="text-xl text-green-500" />,
    description:
      "Plants increase humidity levels, benefiting skin and respiratory health",
  },
  {
    title: "Increased Energy",
    icon: <FaBolt className="text-xl text-orange-500" />,
    description: "Fresh oxygen from plants helps combat fatigue and mental fog",
  },
];

const PlantBenefits = () => {
  return (
    <div className="bg-[#f7fbf2]">
    <div className="py-12 lg:py-16 w-11/12 mx-auto ">
      <div className="text-center mb-12">
        <div className="badge badge-secondary gap-2 mb-4">
          <MdOutlineHealthAndSafety size={16} />
          Health & Wellness
        </div>
        <h2 className="text-4xl font-bold mb-2">
          The Science-Backed Benefits of Plants
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover how indoor plants can transform not just your space, but your
          physical and mental well-being.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="card border border-primary rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="card-body">
              <div className="flex items-center gap-3 mb-2">
                <div>{benefit.icon}</div>
                <h3 className="card-title text-base">{benefit.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-secondary bg-opacity-10 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-2 text-gray-100">
            Ready to Transform Your Space?
          </h3>
          <p className="text-gray-100">
            Start your plant journey today and experience these amazing benefits
            firsthand. Our expert guides will help you choose the perfect plants
            for your lifestyle.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PlantBenefits;

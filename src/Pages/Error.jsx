import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router";
  import error from "../404.json";
import Lottie from "lottie-react";
import DocumentTitle from "../Components/DocumentTitle";
  

const Error = () => {
  DocumentTitle('Oops! Page Not Found | Plantera');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6">
      <div className="w-md">
        <Lottie animationData={error} loop={true} />;
      </div>
      
      <div className="text-6xl mb-4 text-[#69af07]">
        <FaLeaf />
      </div>
       
      <h2 className="text-2xl font-semibold mb-2">Oops! Page not found.</h2>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/"
          className="btn bg-[#69af07] hover:bg-green-700 text-white px-6"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

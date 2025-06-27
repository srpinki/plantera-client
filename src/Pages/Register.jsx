import React, { use, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";

import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/Context";
import DocumentTitle from "../Components/DocumentTitle";

const Register = () => {
  DocumentTitle('Create an Account - Join Plantera Plant Lovers');
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, googleSignIn, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const photo = formData.get("photo");

    //password validate
    const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (passwordRegExp.test(password) === false) {
      setError(
        "Password must have one uppercase, one lowercase, and 6 characters or longer"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
          });
        Swal.fire({
          title: "Signup successfully!",
          icon: "success",
          draggable: true,
        });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorMessage = error.code;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorMessage = error.code;
        // toast.error(`Error: ${errorMessage}`);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7fbf2] py-12 mt-18">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow border border-green-100">
        <h2 className="text-2xl font-bold text-center mb-1">
          Create an account
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your details below to join Plantera
        </p>
        <form onSubmit={handleRegister}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full"
              name="name"
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="input input-bordered w-full"
              name="email"
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Enter photo url"
              className="input input-bordered w-full"
              name="photo"
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="input input-bordered w-full pr-10"
                name="password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-400"
              >
                👁
              </button>
            </div>
          </div>

          <button className="btn btn-secondary w-full flex items-center gap-2 text-white mb-4">
            <CiUser />
            Create an Account
          </button>
        </form>
        <p className="text-error">{error}</p>
        <div className="divider text-sm text-gray-400">OR CONTINUE WITH</div>

        {/* Google sign in */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={25} />
          Google
        </button>

        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-secondary font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

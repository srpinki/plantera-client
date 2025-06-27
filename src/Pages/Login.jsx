import React, { use, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AuthProvider/Context";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import DocumentTitle from "../Components/DocumentTitle";

const Login = () => {
  
  DocumentTitle('Login to Plantera - Access Your Plant Dashboard');

  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Login successfully!",
          icon: "success",
          draggable: true,
        });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
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
        Swal.fire({
          title: "Login successfully!",
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7fbf2] pt-18">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow border border-green-100">
        <h2 className="text-2xl font-bold text-center mb-1">Welcome back</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign in to your Plantera account
        </p>
        <form onSubmit={handleLogin}>
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
            <FaSignInAlt /> Sign in
          </button>
        </form>
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
          Don’t have an account?{" "}
          <a
            href="/auth/register"
            className="text-secondary font-medium hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

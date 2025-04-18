import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { BASE_URL } from '../config.js';
import { AuthContext } from '../AuthContext.jsx';
import HashLoader from "react-spinners/HashLoader"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Login failed");
      }

      // ✅ Dispatch login success
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      // ✅ Save in localStorage
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.data));
      localStorage.setItem("role", result.role);

      toast.success(result.message || "Login successful!");
      navigate("/home");
    } catch (err) {
      toast.error(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 p-6 bg-white">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-6">
          Hello <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>

        <form className="py-4" onSubmit={submitHandler}>
          {/* Email Input */}
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primaryColor text-white p-3 rounded-md hover:bg-blue-700 transition-all"
            disabled={loading}
          >
             {loading ? <HashLoader size={35} color="#ffffff" /> : 'Sign Up'}
          </button>

          <p className='mt-5 text-textColor text-center'>
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-primaryColor font-medium ml-1">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;

import React, { useState } from 'react';
import signupGif from '../assets/images/signup.gif';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config.js';
import { toast } from 'react-toastify';
import HashLoader from "react-spinners/HashLoader"
import uploadImageCloudinary from '../utils/uploadCloudinary';

const Signup = () => {
  const [previewURL, setPreviewURL] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    role: "patient",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload and preview
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageCloudinary(file);
    console.log(data);

    if (data?.url) {
      setPreviewURL(data.url);
      setSelectedFile(data.url);
      setFormData({ ...formData, photo: data.url });
    } else {
      toast.error("Image upload failed. Try again.");
    }
  };

  // Submit form
  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formData.photo) {
      toast.error("Please upload a profile photo.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const {message} = await res.json();

      if (!res.ok) {
        throw new Error(message || "Failed to register.");
      }
      setLoading(false);
      toast.success(message || "Account created successfully!");
      navigate("/login");
    } catch (err) {
      toast.error(err.message || "Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Image Panel */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className='rounded-l-lg'>
              <img src={signupGif} alt="Signup Illustration" className='w-full rounded-l-lg' />
            </figure>
          </div>

          {/* Form Panel */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className='text-primaryColor'>Account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-[#0066ff61] focus:outline-none focus:border-b-primaryColor"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-[#0066ff61] focus:outline-none focus:border-b-primaryColor"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-[#0066ff61] focus:outline-none focus:border-b-primaryColor"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px]">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="ml-2 px-4 py-2 rounded-md text-[15px]"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[16px]">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="ml-2 px-4 py-2 rounded-md text-[15px]"
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure className='w-[60px] h-[60px] rounded-full border-2 border-primaryColor overflow-hidden'>
                    <img
                      src={previewURL}
                      alt="User Avatar"
                      className='w-full h-full object-cover'
                    />
                  </figure>
                )}

                <div className='relative w-[130px] h-[50px] flex items-center'>
                  <input
                    type="file"
                    name="photo"
                    id="customerFile"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  />
                  <label
                    htmlFor="customerFile"
                    className='absolute top-0 left-0 w-full h-full flex items-center justify-center px-3 py-2 text-[15px] bg-[#0066ff46] text-headingColor font-semibold rounded-lg cursor-pointer hover:bg-[#0055cc46]'
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="w-full bg-primaryColor text-white p-3 rounded-md hover:bg-blue-700 transition-all flex justify-center items-center"
                >
                  {loading ? <HashLoader size={35} color="#ffffff" /> : 'Sign Up'}
                </button>

                <p className='mt-5 text-textColor text-center'>
                  Already have an account?
                  <Link to="/login" className="text-primaryColor font-medium ml-1">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

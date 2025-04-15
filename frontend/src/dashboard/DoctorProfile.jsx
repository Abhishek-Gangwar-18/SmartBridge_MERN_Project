import React, { useState, useEffect } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { BASE_URL, token } from "../config.js";
import { toast } from 'react-toastify';
import uploadImageCloudinary from '../utils/uploadCloudinary';


const DoctorProfile = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: doctorData?.name || '',
    email: doctorData?.email || '',
    phone: doctorData?.phone || '',
    bio: doctorData?.bio || '',
    gender: doctorData?.gender || '',
    specialization: doctorData?.specialization || '',
    ticketPrice: doctorData?.ticketPrice || 0,
    qualifications: doctorData?.qualifications || [],
    experiences: doctorData?.experiences || [],
    timeSlots: doctorData?.timeSlots || [],
    photo: null,
  });

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageCloudinary(file);


    if (data?.url) {

      setFormData({ ...formData, photo: data.url });
    } else {
      toast.error("Image upload failed. Try again.");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Failed to update profile');
      }

      toast.success('Profile updated successfully!');
    } catch (err) {
      toast.error(err.message);
    }
  };


  const addItem = (key, item) => {
    setFormData(preFormData => ({ ...preFormData, [key]: [...preFormData[key], item] }))
  }
  const deleteItem = (key, index) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target
    setFormData(preFormData => {
      const updateItems = [...preFormData[key]]
      updateItems[index][name] = value;
      return {
        ...preFormData, [key]: updateItems,
      };
    })
  }

  const addQualification = e => {
    e.preventDefault();
    addItem("qualifications", {
      degree: "PhD",
      university: "Dhaka Medical College"
    });
  };
  const deleteQualification = (e, index) => {
    e.preventDefault()
    deleteItem('qualifications', index)
  }
  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications", index, event)
  }

  const addExperience = e => {
    e.preventDefault();
    addItem("experiences", {
      position: "Senior Surgeon",
      hospital: "Dhaka Medical College"
    });
  };
  const deleteExperience = (e, index) => {
    e.preventDefault()
    deleteItem('experiences', index)
  }
  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc("experiences", index, event)
  }

  const addTimeSlot = e => {
    e.preventDefault();
    addItem("timeSlots", {
      day: 'Sunday',
      startingTime: '10:00',
      endingTime: '04:30'
    });
  };
  const deleteTimeSlot = (e, index) => {
    e.preventDefault()
    deleteItem('timeSlots', index)
  }
  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlots", index, event)
  }


  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>
      <form onSubmit={updateProfileHandler}>
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input"
            readOnly
            disabled
            aria-readonly
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Bio*</p>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Write a short bio..."
            className="form__input"
            rows="5"
          ></textarea>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className='w-[60px] h-[60px] rounded-full border-2 border-primaryColor overflow-hidden'>
              <img
                src={formData.photo}
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

        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <p className="form__label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Psychiatrist">Psychiatrist</option>
                <option value="Radiologist">Radiologist</option>
                <option value="General Physician">General Physician</option>
              </select>
            </div>

            <div>
              <p className="form__label">Ticket Price*</p>
              <input
                type="number"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleInputChange}
                placeholder="100"
                className="form__input"
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="form__label">Qualifications*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Degree*</p>
                    <input type="text" name='degree' value={item.degree} className='form__input' onChange={e => handleQualificationChange(e, index)} />
                  </div>
                  <div>
                    <p className="form__label">Univerity*</p>
                    <input type="text" name='university' value={item.university} className='form__input' onChange={e => handleQualificationChange(e, index)} />
                  </div>
                </div>
                <button onClick={e => deleteQualification(e, index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]'> <AiOutlineDelete /> </button>
              </div>
            </div>
          ))}
          <button onClick={addQualification} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Add Qualification</button>
        </div>

        <div className="mb-5">
          <p className="form__label">Experience*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Position*</p>
                    <input type="text" name='position' value={item.position} className='form__input' onChange={e => handleExperienceChange(e, index)} />
                  </div>
                  <div>
                    <p className="form__label">Hospital*</p>
                    <input type="text" name='hospital' value={item.hospital} className='form__input' onChange={e => handleExperienceChange(e, index)} />
                  </div>
                </div>
                <button onClick={e => deleteExperience(e, index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addExperience} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Add Experience</button>
        </div>

        <div className="mb-5">
          <p className="form__label">Time Slots*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="form__label">Day*</p>
                    <select
                      name="day"
                      value={item.day}
                      className="form__input py-3.5"
                      onChange={e => handleTimeSlotChange(e, index)}
                    >
                      <option value="">Select</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form__label">Starting Time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form__input"
                      onChange={e => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending Time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form__input"
                      onChange={e => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div onClick={e => deleteTimeSlot(e, index)} className="flex items-center">
                    <button onClick={e => deleteQualification(e, index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 cursor-pointer'>
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={addTimeSlot} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Add TimeSlot</button>
        </div>

        <div className="mb-7">
          <button type='submit' onClick={updateProfileHandler} className='bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg'>Update Profile</button>
        </div>

      </form>
    </div>
  );
};

export default DoctorProfile;

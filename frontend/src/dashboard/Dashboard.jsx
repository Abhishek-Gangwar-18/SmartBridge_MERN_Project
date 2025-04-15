import React, { useState } from 'react';
import useFetchData from '../hooks/useFetchData';
import { BASE_URL } from '../config.js';
import Tabs from './Tabs';
import starIcon from '../assets/images/Star.png';
import DoctorAbout from "../pages/DoctorAbout.jsx";
import DoctorProfile from './DoctorProfile.jsx';
import Appointments from './Appointments.jsx';

const Dashboard = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors/profile/me`);
  const [tab, setTab] = useState("overview");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
          <Tabs tab={tab} setTab={setTab} />
          <div className='lg:col-span-2'>
            {data?.isApproved === "pending" && (
              <div className="flex items-center p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg" role="alert">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 me-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.366-.446.985-.446 1.35 0l6.857 8.354c.457.556.07 1.347-.675 1.347H2.075c-.746 0-1.132-.791-.675-1.347L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-2.25-2.25a.75.75 0 011.5 0v1.5a.75.75 0 01-1.5 0v-1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-medium">
                  Your profile is currently under review. You'll be able to access full dashboard features once approved.
                </div>
              </div>
            )}

            <div className="mt-8">
              {tab === 'overview' && <div>
                <div className='flex items-center gap-4 mb-10'>
                  <figure className="max-w-[200px] max-h-[200px]"><img src={data?.photo} alt="" className="w-full" /></figure>
                  <div>
                    <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">{data.specialization}</span>
                    <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">{data.name}</h3>
                    <div className="flex items-center gap-[6px]">
                      <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold "><img src={starIcon} alt="" />  {data?.averageRating ?? 0}</span>
                      <span className=" text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold ">({data.totalRating})</span>
                    </div>
                  </div>
                </div>
                <DoctorAbout name={data.name} about={data.bio} qualification={data.qualifications} experiences={data.experiences} />
              </div>
              }
              {tab === 'appointments' && <Appointments appointments={data.appointments} />}
              {tab === 'profile' && <DoctorProfile doctorData={data} />}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

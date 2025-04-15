import React, { useContext } from 'react';
import { BiMenu } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext.jsx';

const Tabs = ({ tab, setTab }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' }); // update global auth state
    navigate('/login');
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Placeholder for API call or delete logic
      console.log("Delete account logic goes here.");
    }
  };

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>

      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md space-y-2">
        <button
          onClick={() => setTab('overview')}
          className={`${tab === 'overview'
            ? 'bg-indigo-100 text-primaryColor'
            : 'bg-transparent text-headingColor'
            } w-full btn rounded-md`}
        >
          Overview
        </button>

        <button
          onClick={() => setTab('appointments')}
          className={`${tab === 'appointments'
            ? 'bg-indigo-100 text-primaryColor'
            : 'bg-transparent text-headingColor'
            } w-full btn rounded-md`}
        >
          Appointments
        </button>

        <button
          onClick={() => setTab('profile')}
          className={`${tab === 'profile'
            ? 'bg-indigo-100 text-primaryColor'
            : 'bg-transparent text-headingColor'
            } w-full btn rounded-md`}
        >
          Profile
        </button>

        <div className="mt-[50px] md:mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
          >
            Logout
          </button>
          <button
            onClick={handleDeleteAccount}
            className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

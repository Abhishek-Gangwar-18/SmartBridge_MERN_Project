import React from 'react';
import { formateDate } from '../utils/formateDate'; 
// import { BASE_URL } from '../config';
const BookingCard = ({ booking }) => {
  const doctor = booking?.doctor;

  return (
    <div className="border rounded-xl p-5 shadow-lg bg-white flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
          src={doctor?.photo} 
          alt="doctor"
          className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{doctor?.name}</h3>
          <p className="text-sm text-gray-500">{doctor?.specialization}</p>
          <p className="text-sm text-gray-400">Booked on: {formateDate(booking.createdAt)}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${booking.isPaid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {booking.isPaid ? 'Paid' : 'Unpaid'}
        </span>
        <p className="text-gray-700 font-semibold">₹{booking.ticketPrice}</p>
        <a
          href={`/doctors/${doctor?._id}`}
          className="text-blue-600 hover:underline text-sm"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default BookingCard;

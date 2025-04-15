import React from 'react'
import useFetchData from '../hooks/useFetchData'
import { BASE_URL } from '../config.js'
import BookingCard from './BookingCard.jsx'

const MyBookings = () => {
  const { data: appointments } = useFetchData(`${BASE_URL}/users/appointments/me-appointments`);

  return (
    <div>
      {appointments.length === 0 ? (
        <h2 className="text-center text-headingColor text-[20px] font-semibold mt-10">No Appointments Found</h2>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map(booking => (
            <BookingCard booking={booking} key={booking._id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MyBookings;

import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard'
import { doctors } from '../assets/data/doctors.js'
import { BASE_URL } from '../config';
import useFetchData from '../hooks/useFetchData';


const Doctor = () => {
  const [query, setQuery] = useState("");
  const [debouncequery, setDebounceQuery] = useState("");
  const handleSearch = () => {
    setQuery(query.trim());
    console.log("handle serach");
  }
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setDebounceQuery(query);
    },700);
    return ()=>clearInterval(timeout);
  })
  const {
    data: doctors
  } = useFetchData(`${BASE_URL}/doctors?query=${debouncequery}`)
  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" placeholder='doctor or specification' 
          value={query}
          onChange={e=> setQuery(e.target.value)}/>
            <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearch}>Seacrh </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4'>
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Doctor

import { useState } from 'react'
import starImg from "../assets/images/Star.png"
import DoctorAbout from './DoctorAbout'
import DoctorFeedback from './DoctorFeedback'
import DoctorSidePanel from './DoctorSidePanel'
import { BASE_URL } from '../config';
import useFetchData from '../hooks/useFetchData';
import { useParams } from 'react-router-dom'

const DoctorDetail = () => {
  const { id } = useParams(); // <-- move this ABOVE useFetchData
  const { data: doctor, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`);
  const [tab, setTab] = useState('about');

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error || !doctor) return <p className="text-center mt-10 text-red-500">Failed to load doctor data.</p>;

  const {
    name, qualifications, experiences, timeSlots, reviews, bio, about,
    averageRating, totalRating, specialization, ticketPrice, photo
  } = doctor;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure>
                <img src={photo} alt={name} />
              </figure>

              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  {specialization}
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">{name}</h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] font-semibold text-headingColor">
                    <img src={starImg} alt="rating" />{averageRating}
                  </span>
                  <span className='text-[14px] font-[400] text-textColor'>({totalRating})</span>
                </div>
                <p className="text__para text-[14px] md:text-[15px] lg:max-w-[390px]">{bio}</p>
              </div>
            </div>

            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button onClick={() => setTab('about')}
                className={`${tab === "about" && "border-b border-solid border-primaryColor"} py-2 px-2 mr-5 text-[16px] font-semibold`}>
                About
              </button>
              <button onClick={() => setTab('feedback')}
                className={`${tab === "feedback" && "border-b border-solid border-primaryColor"} py-2 px-2 mr-5 text-[16px] font-semibold`}>
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout name={name} about={about} qualification={qualifications} experiences={experiences} />}
              {tab === "feedback" && <DoctorFeedback reviews={reviews} />}
            </div>
          </div>

          <div>
            <DoctorSidePanel doctorId={doctor._id} ticketPrice={ticketPrice} timeSlots={timeSlots} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetail

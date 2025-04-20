"use client"; // This is a client component
// import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import FullScreenModal from "../../components/signup-modal";
import LoginModal from "../../components/login-modal";
import { useState } from 'react';
import Image from "next/image";
import { UserIcon as UserIconOutline, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { users } from '../../components/loginData';
import { useUser } from "../../context/UserContext";
import clock from "../../../../public/goodnewsy-clock.png"
// import url('https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
// export async function createUsers() {
//   // doc link: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
//   'use server'
//   // Fetch data or perform any server-side logic here
//   return {
//     props: {
//       users,
//     },
//   };
// }

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { loggedInUser } = useUser();
  const router = useRouter();
  
  const handlePlayNowClick = () => {
    console.log("Navigate to play loop");
    router.push('/pages/adscene');
  };

    return (
      <div>
      {loggedInUser ? (
        <div className="min-h-screen bg-linear-to-b from-[#1D3557] to-[#456A9F] text-white">
        <div className="w-full mx-auto py-10 px-4">
          <header className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold">GOOD NEWSY</div>
            <div className="text-xl">
              <Cog6ToothIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </header>

          <div className="pt-20">

          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Good Afternoon, {loggedInUser.username} <span role="img" aria-label="wave">👋</span>
            </h1>
            <p className="text-lg">How's your day going?</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#266D9A] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-full ">
                  <div className="w-1/2 flex justify-end items-end">
                <Image src={clock} alt="Clock" className="" style={{ width: '50px' }} />
                </div>
              <div className="text-2xl font-bold">14h 25m</div>
              <p className="text-sm">time left to play</p>
                </div>
                {/* <div className="w-12 h-12 bg-gray-300 rounded-full"></div> */}
                <div className="ml-4">
                  <h2 className="text-xl font-bold">Play Today's Game</h2>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              {/* <div className="text-2xl font-bold">14h 25m</div>
              <p className="text-sm">time left to play</p> */}
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Play now!</button>
            </div>
  
            <div className="bg-[#266D9A] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold">View Your Statistics</h2>
                  <p className="text-sm">
                    Discover your answer rate, keep track of perfect scores, and check your streak.
                  </p>
                </div>
              </div>
              <div className="text-2xl font-bold">3/6</div>
              <p className="text-sm">games played this week</p>
            </div>
  
            <div className="bg-[#266D9A] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold">Discover Weekly Prizes</h2>
                  <p className="text-sm">
                    Every week, all registered users are entered into a raffle to win prizes like iPads, TVs, and more!
                  </p>
                </div>
              </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <div className="flex pt-6 justify-center h-screen w-full bg-linear-to-b from-[#1D3557] to-[#456A9F]">
      <div className="text-center">
        {/* Temporary Logo Image */}
        <div className="rounded-full pt-12 flex items-center justify-center">
          <span className=" kodchasan-bold-italic text-3xl text-white">GOOD<br/>NEWSY</span>
        </div>
        
        {/* Text Below the Logo */}
        <h1 className="mt-6 text-xl font-bold text-white">1Game, 2Minutes</h1>
        <p className="text-xl font-bold text-white mb-6">Good news all day.</p>

        {/* Buttons */}
        <div className="space-y-4 pt-20">
          {/* Play Now Button */}
          <button
            onClick={handlePlayNowClick}
            className="w-full max-w-xs bg-white text-blue-900 font-semibold py-3 rounded-full shadow-md hover:bg-gray-200"
          >
            Play Now
          </button>

          {/* Login and Register Buttons */}
          <div className="flex justify-center space-x-4">
            <button onClick={() => setIsLoginModalOpen(true)} className="flex items-center justify-center w-32 bg-white text-blue-900 font-semibold py-2 rounded-full shadow-md hover:bg-gray-200">
              <span className="mr-2"><UserIconOutline className="h-5 w-5 text-gray-400" aria-hidden="true" /></span> Login
            </button>
            <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center w-32 bg-white text-blue-900 font-semibold py-2 rounded-full shadow-md hover:bg-gray-200">
              <span className="mr-2"><UserIconOutline className="h-5 w-5 text-gray-400" aria-hidden="true" /></span> Register
            </button>
          </div>
        </div>
      </div>
      <FullScreenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} users={users} />
      
    </div>
      )}
    </div>
    
  )
};
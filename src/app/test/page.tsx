'use client'

import {useRef, useEffect} from 'react';
import Image from "next/image";
import Video from 'next-video';
import getStarted from '/videos/get-started.mp4';

const Home = () => {
  const ref = useRef(null);

  function onTimeUpdate(event) {
    console.log(event);
    console.log(this.currentTime);
    }

      function onPause(event) {
    console.log("PAUSED");
    }

  useEffect(() => {
    const handleClick = event => {
      console.log('Button clicked');

      console.log('bobbyhadz.com');
      console.log(this)
    };

     const playEvent = event => {
      console.log('PLAYING');
    };

    const element = ref.current;

    element.addEventListener('click', handleClick);
      element.addEventListener('play', playEvent);
    return () => {
      element.removeEventListener('click', handleClick);
    };


  
  }, []);

  return  (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="padding-top">
       <button ref={ref}>Click</button>
        <Video 
            src="https://stream.mux.com/g8VVMXEcD4rzVm8jYtQHCyZBXTI4yEGt6y6hcrFRJYQ.m3u8" 
            onTimeUpdate={onTimeUpdate}
            onPause={onPause}
        />
          Contraband (Short Film - Test #2)
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
};

export default Home;


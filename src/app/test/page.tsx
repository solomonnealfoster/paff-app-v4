'use client'

import {useRef, useEffect, useState} from 'react';
import Image from "next/image";
import Video from 'next-video';
import getStarted from '/videos/get-started.mp4';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Textarea, Field, Label, Description, Select } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const Home = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(true)
  var lastTime = 0;
  var curTime = 0;


    function onTimeUpdate(event) {
      console.log(this);
      console.log(this.currentTime, " of ", this.duration);
      curTime = this.currentTime
      if (curTime > 5){
        console.log("Past 5");
      }
    }

const [formValues, setFormValues] = useState()

  useEffect(() => {
    /*Close Modal*/
      //setOpen(false)
  }, [])

    function componentDidMount() {
           alert("MOUNTED");
        }

      function onPause(event) {
    console.log("PAUSED");
    }


    function onPlay(event) {
    console.log("PLAY");
    }

    function handleChangeSelect(event) {
      console.log(event.target.name)
      console.log(event.target.value)
    }

  useEffect(() => {
    const handleClick = event => {
      console.log('Button clicked');
      console.log('bobbyhadz.com');
      console.log(this)
    };

    const element = ref.current;

 //   element.addEventListener('click', handleClick);
  // element.addEventListener('play', playEvent);
   //element.addEventListener('pause', pauseEvent);

   /*
    return () => {
      element.removeEventListener('click', handleClick);
    };
    */


  
  }, []);

  return  (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="padding-top">
        <Video 
            src="https://stream.mux.com/g8VVMXEcD4rzVm8jYtQHCyZBXTI4yEGt6y6hcrFRJYQ.m3u8" 
            onTimeUpdate={onTimeUpdate}
            onPause={onPause}
            onPlay={onPlay}
        />
          Contraband (Short Film - Test #2)
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
       <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    Feedback on <strong>Contraband</strong>?
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Provide your honest thoughts on <strong>Contraband</strong>. Answer the questions below from 1 to 5.
                    </p>
                  </div>
                
                  <div className="mt-2">
                     <form class="max-w-sm mx-auto">
                       <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white padding-bottom-top">
                          <strong>What would you rate this film?</strong>
                        </label>
                       <Select 
                        name="film_rating_score"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        onChange={handleChangeSelect}
                       >
                            <option>---- Select Choice ---</option>
                            <option>Strongly Agree</option>
                            <option>Agree</option>
                            <option>Neither Agree or Disagree</option>
                            <option>Disagree</option>
                            <option>Strongly Disagree</option>
                        </Select>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white padding-bottom-top">
                            <strong>I would watch this film again?</strong>
                        </label>
                        <Select 
                        name="film_watching_score"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        onChange={handleChangeSelect}
                       >
                            <option>---- Select Choice ---</option>
                            <option>Strongly Agree</option>
                            <option>Agree</option>
                            <option>Neither Agree or Disagree</option>
                            <option>Disagree</option>
                            <option>Strongly Disagree</option>
                        </Select>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white padding-bottom-top">
                            <strong>What would you score this film?</strong>
                        </label>
                        <Select 
                        name="film_quality_score"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        onChange={handleChangeSelect}
                       >
                            <option>---- Select Choice ---</option>
                            <option>5 - Best</option>
                            <option>4 - Good</option>
                            <option>3 - Fair</option>
                            <option>2 - Poor</option>
                            <option>1 - Lowest</option>
                        </Select>
                      </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Submit
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
    </div>
  );
};

export default Home;


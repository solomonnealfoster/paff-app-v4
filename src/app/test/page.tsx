import Image from "next/image";
import Video from 'next-video';
import getStarted from '/videos/get-started.mp4';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="padding-top">
        <Video src="https://stream.mux.com/g8VVMXEcD4rzVm8jYtQHCyZBXTI4yEGt6y6hcrFRJYQ.m3u8" />
          Contraband (Short Film - Test)
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  )
}

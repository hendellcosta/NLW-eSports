import './index.css'


import logo from '/assets/logo.svg'
import { MdPostAdd } from 'react-icons/md';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} alt="Logo" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Your <span className='bg-duoGradient bg-clip-text text-transparent'>duo</span> is waiting for you!
        </h1>
    
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>

            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>

            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>CS:GO</strong>

            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>

            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>

            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>

            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 w-full self-stretch mt-8 bg-duoGradient rounded-lg overflow-hidden'>
      <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
        <div>
        <strong className='text-white font-black text-2xl block'>Didn't find your duo?</strong>
        <span className='text-zinc-400'>Post an ad to find new players!</span>
        </div>

        <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded-md flex flex-row justify-center items-center gap-1'>
          <MdPostAdd className='text-[20px]' />
          Post Ad
          </button>
      </div>
      </div>
    </div>
  )
}

export default App;
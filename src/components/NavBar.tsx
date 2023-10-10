import logo from '/public/logo.png';
import Image from 'next/image';

export function NavBar() {
  return (
    <div className='flex flex-row items-center justify-between bg-gradient-to-b from-purple-900 to-gray-600 h-16 md:h-20 w-full px-4 md:px-10 py-2'>
      <div className='flex flex-row h-full items-center gap-4'>
        <Image alt='logo' className='h-full w-auto' priority src={logo}/>
        <p className='text-red-500 text-lg md:text-2xl font-bold italic'>{`I've Been`}</p>
      </div>
      <div className='flex flex-row items-center gap-4'>
        <p className='text-white italic text-xs md:text-base'>{`Daniel's Map`}</p>
        <div className='bg-purple-700 p-2 rounded-md hover:bg-purple-600 hover:cursor-pointer hidden md:block'>
          <p className='text-white'>Add Marker</p>
        </div>
        <div className='bg-red-500 p-2 rounded-md hover:bg-red-400 hover:cursor-pointer'>
          <p className='text-white hidden md:block'>Login / Sign Up</p>
          <p className='text-white text-sm block md:hidden'>Menu</p>
        </div>
      </div>
    </div>
  )
};

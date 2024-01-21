import SparkLogo from '@/assets/svgs/spark-logo.svg?react'
import { FC } from 'react'

const Hero: FC = () => {
  return (
    <div className='from-primary-300 to-primary-50 flex min-h-full w-screen flex-col items-center justify-center bg-gradient-to-b px-14 pb-14 pt-12 text-base text-white'>
      <h4 className='font-extrabold'>Welcome to TASKSPARK+</h4>
      <div className='mt-4 min-h-[67px] max-w-80 text-center'>
        <h5>
          Let <span className='text-secondary-800'>TaskSpark+</span> be the catalyst for your
          productivity journey!
        </h5>
      </div>
      <SparkLogo className='my-auto' />
      <button className='ease hover:border-primary-300 group relative z-0 m-auto min-h-11 w-full cursor-pointer overflow-hidden rounded-full border-2 border-white bg-transparent font-medium text-white transition-[background-color] duration-300'>
        <span className='bg-primary-300 ease absolute inset-x-0 bottom-1/2 z-0 h-0 w-full translate-y-1/2 transition-[height] duration-300 group-hover:h-[102%]' />
        <span className='relative z-[1]'>Sign up</span>
      </button>

      <a className='group relative mb-6 mt-10 cursor-pointer leading-5'>
        <span>Already a member ?</span>
        <hr className='group-hover:animate-tracking-in-expand absolute inset-x-0 h-[2px] w-0 bg-white' />
      </a>

      <a className='text-secondary-800 font-medium'>Sign In</a>
    </div>
  )
}

export default Hero

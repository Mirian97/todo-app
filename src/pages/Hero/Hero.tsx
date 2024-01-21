import SparkLogo from '@/assets/svgs/spark-logo.svg?react'
import Button from '@/components/Button/Button'
import Link from '@/components/Link/Link'
import { FC } from 'react'

const Hero: FC = () => {
  return (
    <div className='flex min-h-full w-screen flex-col items-center justify-center bg-gradient-to-b from-primary-300 to-primary-50 px-14 pb-14 pt-12 text-base text-white'>
      <h4 className='font-extrabold'>Welcome to TASKSPARK+</h4>
      <div className='mt-4 min-h-[67px] max-w-80 text-center'>
        <h5>
          Let <span className='text-secondary-800'>TaskSpark+</span> be the catalyst for your
          productivity journey!
        </h5>
      </div>
      <SparkLogo className='my-auto' />
      <Button buttonText='Sign Up' className='max-w-[400px]' />
      <Link linkText='Already a member ?' className='mb-4 mt-10' color='tertiary' />
      <Link linkText='Sign In' color='secondary' />
    </div>
  )
}

export default Hero

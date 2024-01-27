import SparkLogo from '@/assets/svgs/spark-logo.svg?react'
import AuxiliaryText from '@/components/AuxiliaryText/AuxiliaryText'
import Button from '@/components/Button/Button'
import Link from '@/components/Link/Link'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero: FC = () => {
  const navigate = useNavigate()
  const navigateSignUpPage = () => navigate('/sign-up')
  const navigateLoginPage = () => navigate('/login')

  return (
    <div className='flex min-h-full w-screen flex-col items-center justify-center bg-hero-page px-14 pb-14 pt-12 text-base text-white'>
      <h4 className='font-extrabold'>Welcome to TASKSPARK+</h4>
      <div className='mt-4 min-h-[67px] max-w-80 text-center'>
        <h5>
          Let <span className='text-secondary-800'>TaskSpark+</span> be the
          catalyst for your productivity journey!
        </h5>
      </div>
      <SparkLogo className='my-auto' />
      <Button
        buttonText='Sign Up'
        className='max-w-80'
        onClick={navigateSignUpPage}
      />
      <AuxiliaryText className='mb-5 mt-10'>Already a member ?</AuxiliaryText>
      <Link linkText='Sign In' color='tertiary' onClick={navigateLoginPage} />
    </div>
  )
}

export default Hero

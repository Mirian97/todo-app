import AuxiliaryText from '@/components/AuxiliaryText/AuxiliaryText'
import Link from '@/components/Link/Link'
import { FC, HTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpFooter: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className } = props
  const navigate = useNavigate()
  const navigateToSignUp = () => navigate('/sign-up')

  return (
    <div className={`flex w-full flex-col items-center ${className}`}>
      <AuxiliaryText className='mb-7 mt-12'>
        Don't You Have Account ?
      </AuxiliaryText>
      <Link
        linkText='Sing Up for Free'
        color='primary'
        onClick={navigateToSignUp}
        className='pb-11'
      />
    </div>
  )
}

export default SignUpFooter

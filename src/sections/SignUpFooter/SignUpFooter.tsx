import AuxiliaryText from '@/components/AuxiliaryText/AuxiliaryText'
import Link from '@/components/Link/Link'
import { useNavigate } from 'react-router-dom'

const SignUpFooter = () => {
  const navigate = useNavigate()
  const navigateToSignUp = () => navigate('/sign-up')

  return (
    <>
      <AuxiliaryText className='mb-7 mt-12'>
        Don't You Have Account ?
      </AuxiliaryText>
      <Link
        linkText='Sing Up for Free'
        color='primary'
        onClick={navigateToSignUp}
        className='pb-11'
      />
    </>
  )
}

export default SignUpFooter

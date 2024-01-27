import SecureIcon from '@/assets/images/secure-icon.png'
import EmailIcon from '@/assets/svgs/email-icon.svg?react'
import UserIcon from '@/assets/svgs/user-icon.svg?react'
import AuxiliaryText from '@/components/AuxiliaryText/AuxiliaryText'
import Button from '@/components/Button/Button'
import Checkbox from '@/components/Checkbox/Checkbox'
import Input from '@/components/Input/Input'
import Link from '@/components/Link/Link'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import { useImmer } from 'use-immer'

const DEFAULT_SIGN_UP_FORM = {
  username: '',
  email: '',
  password: '',
  repeatPassord: ''
}

const SignUp: FC = () => {
  const [signUpForm, inputSignUpForm] = useImmer(DEFAULT_SIGN_UP_FORM)
  const { username, email, password, repeatPassord } = signUpForm
  const navigate = useNavigate()
  const navigateToSignIn = () => navigate('/login')

  return (
    <form className='flex flex-col items-center'>
      <div className='flex flex-col items-center gap-y-6'>
        <Input
          value={username}
          placeholder='Username'
          startIcon={<UserIcon />}
          onChange={(e) => {
            inputSignUpForm((draft) => {
              draft.username = e.target.value
            })
          }}
        />
        <Input
          value={email}
          placeholder='E-mail'
          startIcon={<EmailIcon />}
          onChange={(e) => {
            inputSignUpForm((draft) => {
              draft.email = e.target.value
            })
          }}
        />
        <Input
          value={password}
          placeholder='Password'
          type='password'
          startIcon={<img src={SecureIcon} alt='Secure icon' />}
          onChange={(e) => {
            inputSignUpForm((draft) => {
              draft.password = e.target.value
            })
          }}
        />
        <Input
          value={repeatPassord}
          placeholder='Repeat Passwrod'
          type='password'
          startIcon={<img src={SecureIcon} alt='Secure icon' />}
          onChange={(e) => {
            inputSignUpForm((draft) => {
              draft.repeatPassord = e.target.value
            })
          }}
        />
      </div>
      <Checkbox
        label='I agree to the Terms & conditions'
        className='ml-4 mt-4 self-start'
      />
      <Button buttonText='Sign In' type='submit' className='mb-12 mt-10' />
      <AuxiliaryText>Already have an account ?</AuxiliaryText>
      <Link
        linkText='Sign In from here'
        color='primary'
        onClick={navigateToSignIn}
        className='mb-10 mt-6'
      />
    </form>
  )
}

export default SignUp

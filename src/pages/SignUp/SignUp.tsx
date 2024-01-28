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

interface ISignUpForm {
  username: string
  email: string
  password: string
  repeatPassword: string
}

const DEFAULT_SIGN_UP_FORM = {
  username: '',
  email: '',
  password: '',
  repeatPassword: ''
}

const SignUp: FC = () => {
  const [signUpForm, inputSignUpForm] =
    useImmer<ISignUpForm>(DEFAULT_SIGN_UP_FORM)
  const { username, email, password, repeatPassword } = signUpForm
  const navigate = useNavigate()
  const navigateToSignIn = () => navigate('/login')
  const navigateToTermsAndConditions = () => navigate('/terms-and-conditions')

  return (
    <form className='flex h-full flex-col items-center'>
      <AuxiliaryText size='lg' color='primary' className='mb-6'>
        Create Account
      </AuxiliaryText>
      <div className='flex flex-col items-center gap-y-4'>
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
          value={repeatPassword}
          placeholder='Repeat Passwrod'
          type='password'
          startIcon={<img src={SecureIcon} alt='Secure icon' />}
          onChange={(e) => {
            inputSignUpForm((draft) => {
              draft.repeatPassword = e.target.value
            })
          }}
        />
      </div>
      <Checkbox label='I agree to the ' className='mb-10 ml-4 mt-4 self-start'>
        <Link
          linkText='Terms & conditions'
          color='primary'
          size='sm'
          noAnimation={true}
          onClick={navigateToTermsAndConditions}
        />
      </Checkbox>
      <Button
        buttonText='Sign Up'
        type='submit'
        className='mb-12 mt-auto sm:mt-0'
      />
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

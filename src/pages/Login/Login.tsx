import SecureIcon from '@/assets/images/secure-icon.png'
import UserIcon from '@/assets/svgs/user-icon.svg?react'
import AuxiliaryText from '@/components/AuxiliaryText/AuxiliaryText'
import Button from '@/components/Button/Button'
import Checkbox from '@/components/Checkbox/Checkbox'
import Input from '@/components/Input/Input'
import Link from '@/components/Link/Link'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useImmer } from 'use-immer'

const DEFAULT_LOGIN_FORM = {
  username: '',
  password: ''
}

interface ILoginForm {
  username: string
  password: string
}

const Login: FC = () => {
  const [formLogin, inputFormLogin] = useImmer<ILoginForm>(DEFAULT_LOGIN_FORM)
  const { username, password } = formLogin
  const navigate = useNavigate()
  const navigateToSignUp = () => navigate('/sign-up')
  const navigateToForgotPassword = () => navigate('/forgot-password')

  return (
    <form className='flex h-full flex-col items-center pb-11'>
      <div className='flex flex-col gap-y-8'>
        <Input
          value={username}
          placeholder='Username'
          startIcon={<UserIcon />}
          onChange={(e) => {
            inputFormLogin((draft) => {
              draft.username = e.target.value
            })
          }}
        />
        <Input
          value={password}
          placeholder='Password'
          type='password'
          startIcon={<img src={SecureIcon} alt='Secure icon' />}
          onChange={(e) => {
            inputFormLogin((draft) => {
              draft.password = e.target.value
            })
          }}
        />
      </div>
      <div className='mt-6 flex w-full justify-between px-3 text-secondary-300'>
        <Checkbox label='Remember me' />
        <Link
          linkText='Forgot Password ?'
          animation='fromRight'
          size='sm'
          onClick={navigateToForgotPassword}
        />
      </div>
      <Button
        buttonText='Sign In'
        type='submit'
        className='mt-auto sm:mt-[80px]'
      />
      <AuxiliaryText className='mb-7 mt-12'>
        Don't You Have Account ?
      </AuxiliaryText>
      <Link
        linkText='Sing Up for Free'
        color='primary'
        onClick={navigateToSignUp}
      />
    </form>
  )
}

export default Login

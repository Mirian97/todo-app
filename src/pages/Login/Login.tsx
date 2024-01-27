import SecureIcon from '@/assets/images/secure-icon.png'
import UserIcon from '@/assets/svgs/user-icon.svg?react'
import AuxiliaryText from '@/components/AuxiliaryText/AuxiliaryText'
import Button from '@/components/Button/Button'
import Checkbox from '@/components/Checkbox/Checkbox'
import HeaderWithLogo from '@/components/HeaderWithLogo/HeaderWithLogo'
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

  return (
    <div className='relative my-auto flex h-screen w-screen justify-center overflow-x-hidden'>
      <HeaderWithLogo />
      <form className='flex flex-col items-center gap-y-8 pt-60'>
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
        <div className='flex w-full justify-between px-3 text-secondary-300'>
          <Checkbox label='Remember me' />
          <Link linkText='Forgot Password ?' animation='fromLeft' />
        </div>
        <Button buttonText='Sign In' type='submit' />
        <AuxiliaryText>Don't You Have Account ?</AuxiliaryText>
        <Link
          linkText='Sing Up for Free'
          color='primary'
          onClick={navigateToSignUp}
        />
      </form>
    </div>
  )
}

export default Login

import SecureIcon from '@/assets/images/secure-icon.png'
import UserIcon from '@/assets/svgs/user-icon.svg?react'
import Button from '@/components/Button/Button'
import HeaderWithLogo from '@/components/HeaderWithLogo/HeaderWithLogo'
import Input from '@/components/Input/Input'
import Link from '@/components/Link/Link'
import { FC } from 'react'
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
          <label className='flex cursor-pointer items-center gap-x-2'>
            <input
              type='checkbox'
              className='rounded-sm border-black/60 text-primary-400 focus:ring-primary-400'
            />
            <span>Remerber me</span>
          </label>
          <Link linkText='Forgot Password ?' animation='fromLeft' />
        </div>
        <Button buttonText='Sign In' type='submit' />
        <Link linkText="Don't You Have Account ?" color='secondary' />
        <Link linkText='Sing Up for Free' color='primary' />
      </form>
    </div>
  )
}

export default Login

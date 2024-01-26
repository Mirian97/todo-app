import SecureIcon from '@/assets/images/secure-icon.png'
import UserIcon from '@/assets/svgs/user-icon.svg?react'
import HeaderWithLogo from '@/components/HeaderWithLogo/HeaderWithLogo'
import Input from '@/components/Input/Input'
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
      <div className='flex flex-col gap-y-8 pt-60'>
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
    </div>
  )
}

export default Login

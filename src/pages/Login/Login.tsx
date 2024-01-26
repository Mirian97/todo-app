import HeaderWithLogo from '@/components/HeaderWithLogo/HeaderWithLogo'
import { FC } from 'react'

const Login: FC = () => {
  return (
    <div className='relative my-auto flex h-screen w-screen justify-center overflow-x-hidden'>
      <HeaderWithLogo />
      <div className='flex flex-col pt-60'>
        <input
          placeholder='Username'
          className='rounded-full border border-solid border-secondary-500 px-3 py-2 placeholder:text-black/40 focus:border-primary-300'
        />
      </div>
    </div>
  )
}

export default Login

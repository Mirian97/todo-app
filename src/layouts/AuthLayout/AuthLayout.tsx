import HeaderWithLogo from '@/components/HeaderWithLogo/HeaderWithLogo'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='relative my-auto flex h-screen w-screen justify-center overflow-x-hidden'>
      <HeaderWithLogo />
      <div className='pt-60'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout

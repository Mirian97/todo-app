import HeaderWithLogo from '@/components/HeaderWithLogo/HeaderWithLogo'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='relative my-auto flex h-screen w-screen justify-center overflow-x-hidden'>
      <HeaderWithLogo />
      <Outlet />
    </div>
  )
}

export default AuthLayout

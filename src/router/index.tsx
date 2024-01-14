import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Hero = lazy(() => import('@/pages/Hero/Hero'))
const Login = lazy(() => import('@/pages/Login/Login'))
const SignUp = lazy(() => import('@/pages/SignUp/SignUp'))

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  }
])

export default Router

import LoadingPage from '@/components/LoadingPage/LoadingPage'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Hero = lazy(() => import('@/pages/Hero/Hero'))
const Login = lazy(() => import('@/pages/Login/Login'))
const SignUp = lazy(() => import('@/pages/SignUp/SignUp'))
const Error = lazy(() => import('@/pages/Error/Error'))
const ForgotPassword = lazy(
  () => import('@/pages/ForgotPassword/ForgotPassword')
)

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
    errorElement: <Error />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/loading',
    element: <LoadingPage />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  }
])

export default Router

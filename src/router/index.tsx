import LoadingPage from '@/components/LoadingPage/LoadingPage'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Hero = lazy(() => import('@/pages/Hero/Hero'))
const Login = lazy(() => import('@/pages/Login/Login'))
const SignUp = lazy(() => import('@/pages/SignUp/SignUp'))
const Error = lazy(() => import('@/pages/Error/Error'))
const Welcome = lazy(() => import('@/pages/Welcome/Welcome'))
const ForgotPassword = lazy(
  () => import('@/pages/ForgotPassword/ForgotPassword')
)
const TermsAndConditions = lazy(
  () => import('@/pages/TermsAndConditions/TermsAndConditions')
)

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
    errorElement: <Error />
  },
  {
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />
      },
      {
        path: 'terms-and-conditions',
        element: <TermsAndConditions />
      },
      {
        path: 'welcome',
        element: <Welcome />
      }
    ]
  },
  {
    path: '/loading',
    element: <LoadingPage />
  }
])

export default Router

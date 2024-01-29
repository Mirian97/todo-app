import LoadingPage from '@/components/LoadingPage/LoadingPage'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Hero = lazy(() => import('@/pages/Hero/Hero'))
const Login = lazy(() => import('@/pages/Login/Login'))
const Error = lazy(() => import('@/pages/Error/Error'))
const SignUp = lazy(() => import('@/pages/SignUp/SignUp'))
const Welcome = lazy(() => import('@/pages/Welcome/Welcome'))
const MakeSelection = lazy(() => import('@/pages/MakeSelection/MakeSelection'))
const TermsAndConditions = lazy(
  () => import('@/pages/TermsAndConditions/TermsAndConditions')
)
const ForgetPassword = lazy(
  () => import('@/pages/ForgetPassword/ForgetPassword')
)
const RecoverPassword = lazy(
  () => import('@/pages/RecoverPassword/RecoverPassword')
)
const UpdatedPassword = lazy(
  () => import('@/pages/UpdatedPassword/UpdatedPassword')
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
        path: 'forget-password',
        element: <ForgetPassword />
      },
      {
        path: 'terms-and-conditions',
        element: <TermsAndConditions />
      },
      {
        path: 'welcome',
        element: <Welcome />
      },
      {
        path: 'make-selection',
        element: <MakeSelection />
      },
      {
        path: 'recover-password',
        element: <RecoverPassword />
      },
      {
        path: 'updated-password',
        element: <UpdatedPassword />
      }
    ]
  },
  {
    path: '/loading',
    element: <LoadingPage />
  }
])

export default Router

import '@/i18n'
import '@/index.css'
import Router from '@/router'
import store from '@/store'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import LoadingPage from './components/LoadingPage/LoadingPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingPage />}>
        <RouterProvider router={Router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
)

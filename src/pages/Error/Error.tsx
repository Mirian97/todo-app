import { FC } from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const Error: FC = () => {
  const error = useRouteError()

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center text-center'>
      <h1 className='text-secondary-400 mb-3 text-2xl font-bold'>Oops!</h1>
      {isRouteErrorResponse(error) ? (
        <div>
          <p>{error.statusText}</p>
          {error.data?.message && (
            <p>
              <i>{error.data.message}</i>
            </p>
          )}
        </div>
      ) : (
        <p>{error?.message || 'Unknown Error'}</p>
      )}
    </div>
  )
}

export default Error

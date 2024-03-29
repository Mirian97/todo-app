import ManWithToDoList from '@/assets/images/man-with-to-do-list.png'
import Button from '@/components/Button/Button'

const Welcome = () => {
  return (
    <div className='flex h-full w-full flex-col items-center pb-11 sm:w-screen sm:flex-row sm:items-start sm:justify-center sm:gap-x-14'>
      <img
        src={ManWithToDoList}
        alt='Man with todo list'
        className='max-w-[300px] sm:max-w-[400px]'
      />
      <div className='flex h-full flex-col'>
        <h4 className='text-primary-600 mb-4 mt-6 text-base font-extrabold'>
          Welcome to TASKSPARK+
        </h4>
        <h5 className='min-h-[67px] max-w-52 text-left text-sm'>
          TASKSPARK+ will helps you to stay organized and perform your task much
          faster
        </h5>
        <Button buttonText='Get started' className='mt-auto sm:mt-14' />
      </div>
    </div>
  )
}

export default Welcome

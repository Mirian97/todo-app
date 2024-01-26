import { FC, InputHTMLAttributes, ReactElement } from 'react'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactElement
  endIcon?: ReactElement
}

const Input: FC<IInput> = (props) => {
  const { startIcon, endIcon, ...restProps } = props
  return (
    <label className='flex w-full items-center gap-x-5 rounded-full border-2 border-solid border-secondary-500/40 px-3 py-2 focus-within:border-primary-300'>
      {startIcon}
      <input
        className='grow border-0 p-0 placeholder:text-black/40 focus:ring-transparent'
        {...restProps}
      />
      {endIcon}
    </label>
  )
}

export default Input

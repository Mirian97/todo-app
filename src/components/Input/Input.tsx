import VisibilityIcon from '@/assets/svgs/visibility-icon.svg?react'
import VisibilityOffIcon from '@/assets/svgs/visibility-off-icon.svg?react'
import { FC, InputHTMLAttributes, ReactElement, useState } from 'react'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactElement
}

const Input: FC<IInput> = (props) => {
  const { startIcon, type, ...restProps } = props
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const togglePassword = () => setShowPassword((sp) => !sp)

  const handleInputType = () => {
    if (type !== 'password') return type
    return showPassword ? 'text' : 'password'
  }

  const renderPasswordButton = () => (
    <button onClick={togglePassword} type='button'>
      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </button>
  )

  return (
    <label className='flex w-full items-center gap-x-5 rounded-full border-2 border-solid border-secondary-500/40 px-3 py-2 focus-within:border-primary-300'>
      {startIcon}
      <input
        type={handleInputType()}
        className='grow border-0 p-0 placeholder:text-black/40 focus:ring-transparent'
        {...restProps}
      />
      {type === 'password' && renderPasswordButton()}
    </label>
  )
}

export default Input

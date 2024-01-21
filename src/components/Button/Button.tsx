import { ButtonHTMLAttributes, FC } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string
}

const Button: FC<IButton> = ({ buttonText, className }) => {
  return (
    <button
      className={`ease group relative z-0 min-h-11 w-full overflow-hidden rounded-full border-2 border-white bg-transparent font-medium text-white transition-[background-color] duration-300 ${className}`}
    >
      <span className='ease absolute inset-x-0 bottom-1/2 z-0 h-0 w-full translate-y-1/2 bg-primary-300 transition-[height] duration-300 group-hover:h-[102%]' />
      <span className='relative z-[1]'>{buttonText}</span>
    </button>
  )
}

export default Button

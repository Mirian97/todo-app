import { ButtonHTMLAttributes, FC } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string
  variant?: 'solid' | 'outlined'
}

const variantClasses = {
  solid: {
    button:
      'border-primary-300 bg-primary-300 text-white hover:text-primary-300',
    span: 'bg-white'
  },
  outlined: {
    button: 'border-white bg-transparent text-white',
    span: 'bg-primary-300'
  }
}

const Button: FC<IButton> = (props) => {
  const { buttonText, className, variant = 'solid', ...rest } = props
  return (
    <button
      className={`
        ease group relative z-0 min-h-11 w-full overflow-hidden rounded-full border-2 font-medium transition-[background-color] duration-300
        ${className}
        ${variantClasses[variant].button}
      `}
      {...rest}
    >
      <span
        className={`
          ease absolute inset-x-0 bottom-1/2 z-0 h-0 w-full translate-y-1/2 transition-[height] duration-300 group-hover:h-[102%]
          ${variantClasses[variant].span}
        `}
      />
      <span className='relative z-[1]'>{buttonText}</span>
    </button>
  )
}

export default Button

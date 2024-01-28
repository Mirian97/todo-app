import { FC, InputHTMLAttributes } from 'react'

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Checkbox: FC<ICheckbox> = (props) => {
  const { label, className, children, ...restProps } = props
  return (
    <label className={`flex cursor-pointer items-start gap-x-2 ${className}`}>
      <input
        type='checkbox'
        className='rounded-sm border-black/60 text-primary-400 focus:ring-primary-400'
        {...restProps}
      />
      <span className='text-sm'>
        {label}
        {children}
      </span>
    </label>
  )
}

export default Checkbox

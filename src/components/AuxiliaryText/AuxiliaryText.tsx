import { FC, HTMLAttributes } from 'react'

interface IAuxialiaryText extends HTMLAttributes<HTMLHeadingElement> {
  color?: 'primary' | 'secondary' | 'tertiary'
  size?: 'md' | 'lg'
}

const colorClasses = {
  primary: 'text-primary-300',
  secondary: 'text-secondary-400',
  tertiary: 'text-white'
}

const sizeClasses = {
  md: 'text-base',
  lg: 'text-lg'
}

const AuxiliaryText: FC<IAuxialiaryText> = (props) => {
  const {
    children,
    className,
    color = 'secondary',
    size = 'md',
    ...restProps
  } = props
  return (
    <h6
      className={`
        text-base
        ${className}
        ${colorClasses[color]}
        ${sizeClasses[size]}
      `}
      {...restProps}
    >
      {children}
    </h6>
  )
}

export default AuxiliaryText

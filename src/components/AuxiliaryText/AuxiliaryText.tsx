import { FC, HTMLAttributes } from 'react'

interface IAuxialiaryText extends HTMLAttributes<HTMLHeadingElement> {
  color?: 'primary' | 'secondary' | 'tertiary'
}

const colorClasses = {
  primary: 'text-primary-300',
  secondary: 'text-secondary-400',
  tertiary: 'text-white'
}

const AuxiliaryText: FC<IAuxialiaryText> = (props) => {
  const { children, className, color = 'secondary', ...restProps } = props
  return (
    <h6
      className={`
        text-base
        ${className}
        ${colorClasses[color]}
      `}
      {...restProps}
    >
      {children}
    </h6>
  )
}

export default AuxiliaryText

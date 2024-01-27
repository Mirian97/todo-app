import { FC, HTMLAttributes } from 'react'

interface IAuxialiaryText extends HTMLAttributes<HTMLHeadingElement> {}

const AuxiliaryText: FC<IAuxialiaryText> = (props) => {
  const { children, className, ...restProps } = props
  return (
    <h6
      className={`w-full text-base text-secondary-400 ${className}`}
      {...restProps}
    >
      {children}
    </h6>
  )
}

export default AuxiliaryText

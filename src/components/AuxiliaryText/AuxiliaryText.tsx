import { FC, HTMLAttributes } from 'react'

interface IAuxialiaryText extends HTMLAttributes<HTMLHeadingElement> {
  text: string
}

const AuxiliaryText: FC<IAuxialiaryText> = (props) => {
  const { text, className, ...restProps } = props
  return (
    <h6
      className={`w-full text-base text-secondary-400 ${className}`}
      {...restProps}
    >
      {text}
    </h6>
  )
}

export default AuxiliaryText

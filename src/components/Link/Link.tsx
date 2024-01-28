import { AnchorHTMLAttributes, FC } from 'react'

interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  linkText: string
  color?: 'primary' | 'secondary' | 'tertiary'
  animation?: 'fromCenter' | 'fromRight' | 'fromLeft'
  size?: 'sm' | 'md'
  noAnimation?: boolean
}

const colorClasses = {
  primary: 'text-primary-400',
  secondary: 'text-secondary-400',
  tertiary: 'text-white'
}

const animationClasses = {
  fromCenter: '',
  fromRight: 'origin-bottom-left',
  fromLeft: 'origin-bottom-right'
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base'
}

const Link: FC<ILink> = (props) => {
  const {
    linkText,
    className,
    color = 'primary',
    animation = 'fromCenter',
    size = 'md',
    noAnimation = false,
    ...rest
  } = props

  return (
    <a
      className={`custom-link
        ${className}
        ${colorClasses[color]}
        ${sizeClasses[size]}
        ${noAnimation && 'no-animation'}
        after:${animationClasses[animation]}
      `}
      {...rest}
    >
      <span>{linkText}</span>
    </a>
  )
}

export default Link

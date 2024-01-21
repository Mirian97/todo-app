import { AnchorHTMLAttributes, FC } from 'react'

interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  linkText: string
  color?: 'primary' | 'secondary' | 'tertiary'
  animation?: 'fromCenter' | 'fromRight' | 'fromLeft'
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

const Link: FC<ILink> = (props) => {
  const {
    linkText,
    className,
    color = 'primary',
    animation = 'fromCenter',
    ...rest
  } = props

  return (
    <a
      className={`custom-link
        ${className}
        ${colorClasses[color]}
        after:${animationClasses[animation]}
      `}
      {...rest}
    >
      <span>{linkText}</span>
    </a>
  )
}

export default Link

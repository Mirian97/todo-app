import { systemLocale } from '@/i18n'
import { FC } from 'react'

const Hero: FC = () => {
  return (
    <div>
      Hero Page <>{systemLocale}</>
    </div>
  )
}

export default Hero

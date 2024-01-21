import SparkLogo from '@/assets/svgs/spark-logo.svg?react'
import { FC, HTMLAttributes } from 'react'

interface IHeaderWithLogo extends HTMLAttributes<HTMLDivElement> {}

const HeaderWithLogo: FC<IHeaderWithLogo> = (props) => {
  const { className } = props

  return (
    <div
      className={`bg-header-logo absolute top-[-300px] flex h-[490px] w-[490px] flex-col-reverse rounded-full ${className}`}
    >
      <SparkLogo className='mx-auto mb-20' />
    </div>
  )
}

export default HeaderWithLogo

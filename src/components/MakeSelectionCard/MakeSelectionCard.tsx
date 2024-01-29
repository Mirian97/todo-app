import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface IMakeSelection extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  viaText: string
  viaData: string
}

const MakeSelectionCard: FC<IMakeSelection> = (props) => {
  const { icon, viaData, viaText, className, ...restProps } = props
  return (
    <button
      className={`
          shadow-make-selection flex min-h-[120px] items-center gap-x-2 bg-[#D9D9D9] px-4 py-5
          ${className}
        `}
      {...restProps}
    >
      <div className='w-14 max-w-full'>{icon}</div>
      <div className='flex flex-col gap-y-1 text-left'>
        <span className='text-xs text-black/50'>{viaText}</span>
        <span className='text-base font-semibold text-black/70'>{viaData}</span>
      </div>
    </button>
  )
}

export default MakeSelectionCard

import CellphoneIcon from '@/assets/svgs/cellphone-icon.svg?react'
import EmailDarkIcon from '@/assets/svgs/email-dark-icon.svg?react'
import MakeSelectionCard from '@/components/MakeSelectionCard/MakeSelectionCard'
import SignUpFooter from '@/sections/SignUpFooter/SignUpFooter'

const MakeSelection = () => {
  return (
    <div className='-mt-4 flex h-full flex-col items-start px-14 sm:items-center'>
      <h4 className='text-left text-xl font-semibold tracking-wide text-black'>
        Make Selection
      </h4>
      <p className='mb-6 mt-2 w-52 text-left text-xs text-black/50 sm:text-center'>
        Select which contact detail should use to reset your password
      </p>
      <div className='flex flex-col gap-y-5'>
        <MakeSelectionCard
          icon={<CellphoneIcon />}
          viaText='via SMS'
          viaData='+91 70103 66942'
        />
        <MakeSelectionCard
          icon={<EmailDarkIcon />}
          viaText='via E-mail'
          viaData='gogulkrish84984@gmail.com'
        />
      </div>
      <SignUpFooter className='mt-auto sm:mt-0' />
    </div>
  )
}

export default MakeSelection

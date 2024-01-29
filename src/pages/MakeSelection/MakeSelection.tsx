import CellphoneIcon from '@/assets/svgs/cellphone-icon.svg?react'
import EmailDarkIcon from '@/assets/svgs/email-dark-icon.svg?react'
import MakeSelectionCard from '@/components/MakeSelectionCard/MakeSelectionCard'
import SignUpFooter from '@/sections/SignUpFooter/SignUpFooter'

const MakeSelection = () => {
  return (
    <div className='px-14'>
      <h4 className='mt-3 text-left text-xl font-semibold tracking-wide text-black'>
        Make Selection
      </h4>
      <p className='text-left text-xs text-black/50'>
        Select which contact detail should use to reset your password
      </p>
      <div className='flex flex-col gap-y-11'>
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
      <SignUpFooter />
    </div>
  )
}

export default MakeSelection

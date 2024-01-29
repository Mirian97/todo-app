import ApprovalIcon from '@/assets/images/approval-icon.png'
import Button from '@/components/Button/Button'
import SignUpFooter from '@/sections/SignUpFooter/SignUpFooter'

const UpdatedPassword = () => {
  return (
    <div className='-mt-4 flex h-full flex-col items-center overflow-y-hidden'>
      <h4 className='text-center text-xl font-semibold tracking-wide text-[#434343]'>
        Password <br /> Updated
      </h4>
      <img src={ApprovalIcon} alt='Approval icon' />
      <p className='mb-6 mt-2 w-52 text-left text-xs text-black/50 sm:text-center'>
        Your password has been updated!
      </p>
      <Button buttonText='Sign In Again' className='max-w-full' />
      <SignUpFooter />
    </div>
  )
}

export default UpdatedPassword

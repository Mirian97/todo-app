import EmailIcon from '@/assets/svgs/email-icon.svg?react'
import LockIcon from '@/assets/svgs/lock-icon.svg?react'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import SignUpFooter from '@/sections/SignUpFooter/SignUpFooter'
import { useState } from 'react'

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('')

  return (
    <div className='-mt-4 flex flex-col items-center overflow-y-hidden'>
      <LockIcon className='mx-auto' />
      <h4 className='mt-3 text-xl font-semibold tracking-wide text-black'>
        Forget Password
      </h4>
      <p className='text-[11px] text-black/50'>
        Enter Valid Mail To Reset Password
      </p>
      <Input
        value={email}
        placeholder='Enter'
        startIcon={<EmailIcon />}
        className='mb-4 mt-6'
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <Button buttonText='Next' />
      <SignUpFooter />
    </div>
  )
}

export default ForgotPassword

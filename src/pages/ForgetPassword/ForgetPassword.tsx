import EmailIcon from '@/assets/svgs/email-icon.svg?react'
import LockIcon from '@/assets/svgs/lock-icon.svg?react'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import { useState } from 'react'

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('')

  return (
    <div className='text-center'>
      <LockIcon className='mx-auto' />
      <h4 className='mt-3 text-xl font-semibold text-black'>Forget Password</h4>
      <p className='text-xs text-black/50'>
        Enter Valid Mail To Reset Password
      </p>
      <Input
        value={email}
        placeholder='Enter'
        startIcon={<EmailIcon />}
        className='mb-6 mt-9'
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <Button buttonText='Next' />
    </div>
  )
}

export default ForgotPassword

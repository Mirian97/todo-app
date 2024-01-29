import RecoverIcon from '@/assets/images/recover-icon.png'
import SecureIcon from '@/assets/images/secure-icon.png'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import SignUpFooter from '@/sections/SignUpFooter/SignUpFooter'
import { useImmer } from 'use-immer'

interface IRecoverForm {
  password: string
  repeatPassword: string
}

const DEFAULT_RECOVER_FORM = {
  password: '',
  repeatPassword: ''
}

const RecoverPassword = () => {
  const [recoverForm, inputRecoverForm] =
    useImmer<IRecoverForm>(DEFAULT_RECOVER_FORM)
  const { password, repeatPassword } = recoverForm

  return (
    <div className='flex h-full flex-col items-center text-center'>
      <img src={RecoverIcon} alt='Recover icon' />
      <h4 className='text-xl font-semibold text-[#434343]'>New Credentials</h4>
      <p className='mb-6 mt-2 w-52 text-xs text-black/50 sm:text-center'>
        Select which contact detail should use to reset your password
      </p>
      <form>
        <Input
          value={password}
          placeholder='Password'
          type='password'
          startIcon={<img src={SecureIcon} alt='Secure icon' />}
          onChange={(e) => {
            inputRecoverForm((draft) => {
              draft.password = e.target.value
            })
          }}
        />
        <Input
          value={repeatPassword}
          placeholder='Repeat Passwrod'
          type='password'
          startIcon={<img src={SecureIcon} alt='Secure icon' />}
          className='mb-9 mt-7'
          onChange={(e) => {
            inputRecoverForm((draft) => {
              draft.repeatPassword = e.target.value
            })
          }}
        />
        <Button buttonText='Update' type='submit' />
      </form>
      <SignUpFooter className='mt-auto sm:mt-0' />
    </div>
  )
}

export default RecoverPassword

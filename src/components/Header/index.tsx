import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova Transação</NewTransactionButton>
            </Dialog.Trigger>
            <NewTransactionModal></NewTransactionModal>
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}

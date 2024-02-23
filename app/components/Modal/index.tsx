import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { PropsWithChildren } from 'react'

type ModalProps = {
  // Always want to be a phosphor icon
  trigger: React.ReactNode
}

const Modal = ({ ...props }: PropsWithChildren<ModalProps>) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-black rounded-md">
        <DialogHeader>
          <DialogDescription>{props.children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Modal

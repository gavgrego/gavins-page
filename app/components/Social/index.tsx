'use client'

import { Copy, EnvelopeSimple, GithubLogo, LinkedinLogo, File } from 'phosphor-react'
import Modal from '../Modal'
import { useState } from 'react'

type SocialProps = {
  github: string
  email: string
  linkedin: string
}

const Social = ({ ...props }: SocialProps) => {
  const [textCopied, setTextCopied] = useState<string>()

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setTextCopied('Email successfully copied to clipboard!')
    } catch (error) {
      setTextCopied("For some reason we couldn't copy the email, please try again.")
    }
  }

  return (
    <div className="flex flex-row gap-3">
      <a href={props.github} target="_blank">
        <GithubLogo size={32} weight="bold" className="cursor-pointer hover:opacity-60" />
      </a>

      <Modal
        trigger={
          <EnvelopeSimple
            size={32}
            weight="bold"
            className="cursor-pointer hover:opacity-60 text-purple-400"
          />
        }
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="flex flex-row gap-1 ">
              <p>{props.email}</p>
              <Copy
                size={16}
                className="cursor-pointer"
                onClick={() => copyToClipboard(props.email)}
              />
            </div>
            {textCopied && <p>{textCopied}</p>}
          </div>

          <div className="flex justify-center w-full">
            <a href={`mailto:${props.email}`} target="_blank" className="underline">
              Or open your default mail client.
            </a>
          </div>
        </div>
      </Modal>

      <a target="_blank" href={props.linkedin} className="hover:opacity-60">
        <LinkedinLogo size={32} weight="bold" className="cursor-pointer" />
      </a>

      <a href="gavin-gregory-resume.pdf" target="_blank" className="hover:opacity-60">
        <File size={32} weight="bold" />
      </a>
    </div>
  )
}

export default Social

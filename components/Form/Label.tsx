import { ReactNode } from 'react'
import styled from 'styled-components'

const El = styled.label`
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`

const LabelText = styled.span`
  margin-bottom: 15px;
`

const Children = styled.div``

interface LabelProps {
  text: string
  children: ReactNode
}

const Label : React.FC<LabelProps> = ({ children, text }) => {
  return (
    <El>
      <LabelText>
        {text}
      </LabelText>

      <Children>
        {children}
      </Children>
    </El>
  )
}

export default Label
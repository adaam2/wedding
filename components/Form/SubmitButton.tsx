import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

interface SubmitButtonProps {
  text: string
}

const El = styled.input`
  padding: 5px 15px;
  background: #fff;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #b0bea7;
  color: ${darken(0.5)('#b0bea7')};
  font-family: inherit;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`

export const SubmitButton : React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <El type="submit" value={text} />
  )
}

import React from 'react'
import styled from 'styled-components'

interface TextFieldProps {
  value: string
  name: string
  minLength?: number
  required?: boolean
  textarea?: boolean
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  style?: any
}

const El = styled.input`
  padding: 8px 15px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.border};
 color: ${({ theme }) => theme.text};
  font-family: inherit;
  font-size: 18px;
  min-width: 400px;

  &:focus {
    outline-color: #b0bea7;
    outline-width: 2px;
  }
`

const TextField : React.FC<TextFieldProps> = ({ name, value, placeholder, minLength = 1, required = false, textarea = false, onChange, ...rest }) => {
  return (
    <El minLength={minLength} required={required} as={textarea ? 'textarea' : 'input'} name={name} placeholder={placeholder} value={value} {...rest} onChange={onChange} />
  )
}

export default TextField
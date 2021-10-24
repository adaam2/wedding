import styled from 'styled-components'

const Wrap = styled.div``

const Option = styled.div`
  margin: 5px 0;
  color: ${({ theme }) => theme.text};
`

interface RadioButtonListProps {
  options: string[]
  value: string
  name: string
  onChange: (v: string) => void
}

const RadioButtonList : React.FC<RadioButtonListProps> = ({ options, onChange, name, value }) => {
  return (
    <Wrap>
      {options.map((opt, idx) => (
        <Option key={opt}>
          <input required type="radio" name={name} id={idx.toString()} onChange={(e) => onChange(opt)} checked={value === opt} /> <label htmlFor={idx.toString()}>{opt}</label>
        </Option>
      ))}
    </Wrap>
  )
}

export default RadioButtonList
import React, { useState } from 'react'
import { SubmitButton } from './SubmitButton'
import styled from 'styled-components'
import TextField from './TextField'
import Label from './Label'
import RadioButtonList from './RadioButtonList'

const encode = (data: Record<string, string>) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}

const FormRow = styled.div`
  display: flex;
  margin: 10px 0;
`

const Form = () => {
	const [name, setName] = useState('')
  const [rsvp, setRsvp] = useState('')
  const [dietaryRequirements, setDietaryRequirements] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": 'rsvp',
        attendeeNames: name,
        dietaryRequirements,
        rsvp
      })
    }).then(() => alert('Success')).catch(error => alert(error))
	}

	return (
		<form data-netlify="true" name="rsvp" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="rsvp" />

      <FormRow>
        <Label text="Attendee names:">
          <TextField placeholder="Enter your name here" name="attendeeNames" onChange={(e) => setName(e.currentTarget.value)} value={name} />
        </Label>
      </FormRow>

      <FormRow>
        <Label text="RSVP:">
          <RadioButtonList name="rsvp" options={["Delightfully accept", "Regretfully decline"]} value={rsvp} onChange={(value) => setRsvp(value)} />
        </Label>
      </FormRow>

      <FormRow>
        <Label text="Dietary requirements:">
          <TextField textarea placeholder="Enter any dietary requirements here" name="dietaryRequirements" onChange={(e) => setDietaryRequirements(e.currentTarget.value)} style={{ minWidth: '500px' }} value={dietaryRequirements} />
        </Label>
      </FormRow>

      <FormRow>
        <SubmitButton text="Save" />
      </FormRow>
  </form>
	)
}

export default Form

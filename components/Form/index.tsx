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

const STORAGE_KEY = 'wedding.the-bulls.uk-submission'

const Form = () => {
  const [success, setSuccess] = useState(false)
	const [name, setName] = useState('')
  const [rsvp, setRsvp] = useState('')
  const [dietaryRequirements, setDietaryRequirements] = useState('')

  const handleSubmission = () => {
    localStorage.setItem(STORAGE_KEY, 'true')

    setSuccess(true);
  }

  const hasStorageItem = typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY) === 'true'

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
    }).then(() => handleSubmission()).catch(error => alert(error))
	}

  if (hasStorageItem || success) {
    return (
      <div>
        Thank you for confirming your attendance.
      </div>
    )
  }

	return (
		<form netlify-honeypot="bot-field" data-netlify="true" name="rsvp" method="post" onSubmit={handleSubmit}>
      <p style={{ display: 'none' }}>
        <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
      </p>
      <input type="hidden" name="form-name" value="rsvp" />

      <FormRow>
        <Label text="Attendee names:">
          <TextField required minLength={1} placeholder="Enter guest names here" name="attendeeNames" onChange={(e) => setName(e.currentTarget.value)} value={name} />
        </Label>
      </FormRow>

      <FormRow>
        <Label text="RSVP:">
          <RadioButtonList name="rsvp" options={["Delightfully accept", "Regretfully decline"]} value={rsvp} onChange={(value) => setRsvp(value)} />
        </Label>
      </FormRow>

      <FormRow>
        <Label text="Dietary requirements:">
          <TextField textarea placeholder="Enter any dietary requirements here" name="dietaryRequirements" onChange={(e) => setDietaryRequirements(e.currentTarget.value)} value={dietaryRequirements} />
        </Label>
      </FormRow>

      <FormRow>
        <SubmitButton text="Submit" />
      </FormRow>
  </form>
	)
}

export default Form

import React, { useState } from 'react'

const encode = (data: Record<string, string>) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}

const Form = () => {
	const [name, setName] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ name })
		})
			.then(() => alert('Success!'))
			.catch(error => alert(error))

		e.preventDefault()
	}

	return (
		<form data-netlify="true" name="rsvp" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="rsvp" />
      <input name="attendeeNames" type="text" onChange={(e) => setName(e.target.value)} />
      <input type="submit"/>
  </form>
	)
}

export default Form

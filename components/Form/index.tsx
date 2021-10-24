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
		<div>
			<form name="rsvp" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="rsvp" />

				<p>
					<label>
              Your Name: <input type="text" name="attendeeName" value={name} onChange={(e) => setName(e.target.value)} />
					</label>
				</p>

				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		</div>
	)
}

export default Form

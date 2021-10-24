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
			body: encode({ 'form-name': 'rsvp', name })
		})
			.then(() => alert('Success!'))
			.catch(error => alert(error))

		e.preventDefault()
	}

	return (
		<div>
			<form data-netlify="true" onSubmit={handleSubmit}>
				<p>
					<label>
              Your Name: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
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

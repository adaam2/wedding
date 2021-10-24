import React, { useState } from 'react'
import PropTypes from 'prop-types'

const encode = (data) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}

const Form = props => {
	const [name, setName] = useState('')

	const handleSubmit = e => {
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
			<form onSubmit={handleSubmit}>
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

Form.propTypes = {

}

export default Form

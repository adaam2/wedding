import Head from 'next/head'

import Form from '@components/Form'
import MainLayout from '../layouts/main'

export default function RSVP() {
	return (
		<MainLayout>
      <Head>
        <title>
          The wedding of AJB + AJT - RSVP
        </title>
      </Head>

      <Form />
    </MainLayout>
	)
}

import Head from 'next/head'

import MainLayout from '../layouts/main'

export default function Info() {
	return (
		<MainLayout>
      <Head>
        <title>
          The wedding of AJB + AJT - Info
        </title>
      </Head>

      <p>
        Welcome to our wedding!
      </p>
    </MainLayout>
	)
}

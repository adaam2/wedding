import Head from 'next/head'

import MainLayout from '../layouts/main'

export default function Home() {
	return (
		<MainLayout>
      <Head>
        <title>
          The wedding of AJB + AJT - Home
        </title>
      </Head>

      <p>
        Adam Bull & Alice Judge-Talbot, together with their families, request the pleasure of your company on their wedding day, the <b>19th May 2022</b>, for a ceremony at <b>12.45pm</b>.
      </p>

      <p>
        at:
      </p>

      <p>
        <b>The Italian Villa<br/>
        Compton Acres, Poole, BH13 7ES.</b>
      </p>
      <p>
        Drinks, dinner, and dancing to follow.
      </p>
      <p>
        Carriages at 11.30pm
      </p>
    </MainLayout>
	)
}

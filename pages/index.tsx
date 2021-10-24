import styled from 'styled-components'

import Form from '@components/Form'

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-flow: row;
  width: 100%;
  height: 400px;
  margin: 5em;
  border: 1px solid #e2e2e2;
`

const Us = styled.aside`
  display: flex;
  background-image: url(/us.jpg);
  background-size: contain;
  clip-path: polygon(0 0, 0 100%, 100% 0);
  background-repeat: no-repeat;
  align-self: stretch;
  height: 100%;
  flex: 1;
`

const Content = styled.article`
  background: white;
  padding: 1.5em;
  flex: 4;
  margin: 150px 0;
  min-width: 750px;
  height: 100%;
`

export default function Home() {
	return (
		<Container>
			<Us />

			<Content>
				<Form />
			</Content>
		</Container>
	)
}

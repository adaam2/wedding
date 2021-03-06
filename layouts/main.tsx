import Nav from '@components/Nav'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-flow: row;
  width: 100%;
  margin-left: 35px;
  margin-top: 35px;
  flex: 1;

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin: 0;
    margin-top: -75px;
    border: none;
  }
`

const Us = styled.aside`
  display: flex;
  align-self: stretch;
  flex: 1;

  img {
    max-height: 600px;
    filter: grayscale(35%);


  }

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    display: none;
  }
`

const Wreath = styled.div`
  position: absolute;
  right: 64px;
  bottom: -113px;

  img {
    max-width: 200px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    display: none;
  }
`

const Brand = styled.div`
  margin-left: 50px;
  position: relative;
  top: -60px;

  img {
    max-width: 200px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin-left: 20px;

    img {
      max-width: 120px;
    }
  }
`

const Content = styled.article`
  font-size: 18px;
  padding: 0 1.5em;
  flex: 4;
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
`

const InnerWrapper = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 90%;

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    max-width: initial;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: row;

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    flex-flow: column;
  }
`

interface MainProps {
  children: ReactNode
}

const Main : React.FC<MainProps> = ({ children }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Nav />

        <ContentWrapper>
          <Brand>
            <img src="/logo.png" />
          </Brand>

          <Container>
            <Content>
              {children}
            </Content>

            <Us>
              <img src="/us.jpeg" />
            </Us>
          </Container>
        </ContentWrapper>

        <Wreath>
          <img src="/wrap.png" />
        </Wreath>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Main

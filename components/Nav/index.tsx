import styled from 'styled-components'
import { darken } from 'polished'

const NavEl = styled.nav`
  margin-left: auto;
  margin-top: 42px;
  margin-bottom: 32px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-flex;

    li {
      margin-right: 10px;
      font-size: 18px;

      a {
        text-decoration: none;
        color: #b0bea7;

        &:hover {
          color: ${darken(0.25)('#b0bea7')}
        }
      }
    }
  }
`

interface NavProps {

}

const Nav : React.FC<NavProps> = () => {
  return (
    <NavEl>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/rsvp">RSVP</a>
        </li>
        <li>
          <a href="/info">Info</a>
        </li>
      </ul>
    </NavEl>
  )
}

export default Nav
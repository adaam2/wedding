import Head from 'next/head'
import { darken } from 'polished'
import styled from 'styled-components'

const InfoElement = styled.div`
  a {
    color: #f3a6cc;
    text-decoration: none;

    &:hover {
      color: ${darken(0.5)('#f3a6cc')};
    }
  }

  p {
    line-height: 1.25;
  }

  ul {
    li {
      margin: 8px 0;

      a {
        color: #f3a6cc;
        text-decoration: none;

        &:hover {
          color: ${darken(0.5)('#f3a6cc')};
        }
      }
    }
  }
`

import MainLayout from '../layouts/main'

export default function Info() {
	return (
		<MainLayout>
      <Head>
        <title>
          The wedding of AJB + AJT - Information for guests
        </title>
      </Head>

      <InfoElement>
      <h2>Guest information:</h2>

      <h3>Accomodation</h3>

      <p>There are a number of hotels a short car drive away in Poole or Bournemouth. We would recommend:</p>

      <ul>
        <li><a href="https://www.greenekinginns.co.uk/hotels/loch-fyne-hotel-poole/">Loch Fyne hotel</a></li>
        <li><a href="https://www.fjbhotels.co.uk/harbour-heights-hotel/">Harbour Heights hotel</a></li>
        <li><a href="https://www.fjbhotels.co.uk/sandbanks-hotel/">The Sandbanks hotel</a></li>
        <li><a href="https://bournemouthwestcliffhotel.co.uk/">Bournemouth West Cliff Hotel</a></li>
        <li><a href="https://www.hilton.com/en/hotels/bohtmhi-hilton-bournemouth/?WT.mc_id=zELWAKN0EMEA1HI2DMH3LocalSearch4DGGenericx6BOHTMHI">Hilton Bournemouth</a></li>
        <li><a href="https://www.marriott.com/hotels/travel/bohbm-bournemouth-highcliff-marriott-hotel/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MjUyMzkxMy03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D">Bournemouth Highcliff Marriott</a></li>
        <li><a href="https://all.accor.com/hotel/B8Q3/index.en.shtml">Ibis Styles Bournemouth</a></li>
        <li><a href="https://www.ihg.com/holidayinnexpress/hotels/gb/en/poole/poouk/hoteldetail">Holiday Inn Express Poole</a></li>
      </ul>

      <h3>Taxis</h3>
      <p>We recommend United Taxis on <a href="tel:01202 556677">01202 556677</a>, otherwise Uber operate throughout Poole and Bournemouth.</p>

      <h3>Parking</h3>
      <p>Reserved parking at Compton Acres will be available on the day, alongside nearby on-street parking.</p>

      <h3>Gifts</h3>
      <p>Your presence at our wedding is enough of a gift, but should you wish to buy us something, we’d greatly appreciate a contribution towards our honeymoon <a href="https://prezola.com/wishlists/10243890/">via Prezola</a>.</p>

      <h3>The Italian Villa</h3>
      <p>The Italian Villa is situated within Compton Acres, which is highly regarded as one of the most important historic gardens in England. Dating back to 1924, its ten acres of beautifully-landscaped Grade II listed horticulture, including the famous Italian and Japanese gardens, will be available for our guests to enjoy throughout the day.</p>

      <h3>Local Area</h3>
      <p>The Italian Villa is situated close to Poole Harbour and Dorset’s Jurassic Coastline’s natural beauty. To the north you have the rolling hills and quaint villages of the Dorset countryside. Heading east takes you to the ancient woodlands of the New Forest, its varied wildlife, and the Isle of Wight, a short ferry crossing over Solent water. Southwards we have the 7 miles of sandy beaches that is the expanse of Poole Bay, and West takes you into the World Heritage site of the Dorset Jurassic coast with its many cliff top walks, small bays and years of geological history.</p>

      <h3>RSVP</h3>
      <p>Please respond by 31.01.22. You can RSVP <a href="/rsvp">here</a>.</p>

      <h3>Further information</h3>
      <p>For any further information please email <a href="mailto:adamandalice@the-bulls.uk">adamandalice@the-bulls.uk</a></p>

      </InfoElement>
    </MainLayout>
	)
}

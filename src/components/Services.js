import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
const Services = (props) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
            Conheça nossa loja fisica! <br /> #VemPraYes
          </h3>
          <p>
          Yes Tabacaria - Para uma experiência de enrolar incomparável. Localizada na Avenida Santa Cruz 2615 - Franca/SP.


          </p>
        </article>
        <div className='services-center'>
        <div className='background'>
        <Map style={{ width: 'auto', height: '300px', position: 'relative' }}
             google={props.google}
             zoom={14}
             initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Example coordinates
             onError={error => {
              console.error("Error loading Google Maps: ", error);
            }}
          />
        </div>
          
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 8rem;
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 3rem;
    display: grid;
    gap: 2.5rem;
    height: 250px;
    background: var(--clr-primary-7);
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    height: 300px;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  .background {
    height: 200px;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-7);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDa_MSXYpvPcy64C3yPT3Y4Nikxnnmxstk'
})(Services);
